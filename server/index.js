const { inferStrainData } = require("../store/utilities/strain");
const siteMapBuilder = require("../scripts/postBuild.js");
const schemaBuilder = require("../scripts/schemaBuilder.js");
const redirectUrls = require("../scripts/redirects.js");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");
const lowercasePaths = require("express-lowercase-paths");
const { parse } = require("url");
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { SubscriptionServer } = require("subscriptions-transport-ws");

const routers = require("./routes/api/");

require("dotenv").config();
const resolvers = require("./data/resolvers");
// our packages
const schema = require("./data/schema");

// next.js setup
const port = process.env.PORT || -1;
const url = process.env.URL || "FAILED";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const subscriptionsPath = "/subscriptions";
const subscriptionsEndpoint = `ws://${url}:${port}${subscriptionsPath}`;
// const subscriptionsEndpoint = `wss://www.cropkingseeds.com${subscriptionsPath}`;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.M_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("We are connected!"));

app
  .prepare()
  .then(async () => {
    const server = express();
    server.use(bodyParser.json()); // support json encoded bodies
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    server.use("/api", routers);
    ////////////
    //middleware
    server.use(compression());
    server.use(
      cors({
        origin: "*"
      })
    );
    server.use(
      express.static(__dirname + "/static/", {
        maxAge: "365d"
      })
    );
    //lowercase urls
    server.use(lowercasePaths());
    //ignore trailing slash
    server.use((req, res, next) => {
      const test = /\?[^]*\//.test(req.url);
      if (req.url.substr(-1) === "/" && req.url.length > 1 && !test)
        res.redirect(301, req.url.slice(0, -1));
      else next();
    });
    //sitemap
    let strains = await resolvers.Query.allStrains(null, { filter: null });
    let sitemapStrains = strains.map((strain, index) => {
      return inferStrainData(strain);
    });
    siteMapBuilder(sitemapStrains);
    // //schema markup
    let _strains = strains.map((strain, index) => {
      delete strain._id;
      delete strain.__v;
      return strain;
    });
    schemaBuilder(JSON.stringify(_strains));

    // update strains to add moreInfo
    // let updated = await resolvers.Mutation.updateStrainInfo(null, {});

    ////////
    //routes
    server.get("/google60466b74b41063c8.html", (req, res) => {
      app.serveStatic(
        req,
        res,
        path.resolve("./static/google60466b74b41063c8.html")
      );
    });
    server.get("/robots.txt", (req, res) => {
      app.serveStatic(req, res, path.resolve("./static/robots.txt"));
    });
    server.get("/sitemap.xml", (req, res) => {
      app.serveStatic(req, res, path.resolve("./static/sitemap.xml"));
    });
    server.use(
      "/vlgzpjsbqsmtaqkvgokwkcldowhfwxaiqsxyfhuydyhtzxyrzjyihphbfsxwhjnp",
      bodyParser.json(),
      graphqlExpress((req, res) => {
        return {
          schema,
          context: {
            token: req.headers.authorization
              ? req.headers.authorization.substring("Bearer ".length)
              : ""
          }
        };
      })
    );
    if (process.env.NODE_ENV === "development") {
      server.use(
        "/graphiql",
        graphiqlExpress({
          endpointURL:
            "/vlgzpjsbqsmtaqkvgokwkcldowhfwxaiqsxyfhuydyhtzxyrzjyihphbfsxwhjnp",
          subscriptionsEndpoint: subscriptionsEndpoint
        })
      );
    }
    server.get("/product/:_id", (req, res) => {
      app.render(req, res, "/product", {});
    });
    server.get("/article/:_id", (req, res) => {
      app.render(req, res, "/article", {});
    });
    // server.get("/confirmation", (req, res) => {
    //   res.redirect("/");
    // });
    // 301 redirects
    let redirects = redirectUrls(sitemapStrains);

    for (let i = 0; i < redirects.length; i++) {
      let url = redirects[i];
      server.get(url.from, (req, res) => {
        res.redirect(301, url.to);
      });
    }
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const ws = http.createServer(server);
    ws.listen(port, () => {
      console.log(`Apollo Server is now running on http://${url}:${port}`);
      // Set up the WebSocket for handling GraphQL subscriptions
      new SubscriptionServer(
        {
          execute,
          subscribe,
          schema
        },
        {
          server: ws,
          path: "/subscriptions"
        }
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
