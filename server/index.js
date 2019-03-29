const { inferStrainData } = require("../store/utilities/strain");
const siteMapBuilder = require("../scripts/postBuild.js");
const schemaBuilder = require("../scripts/schemaBuilder.js");
const redirects = require("../scripts/redirects.js");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const frameguard = require("frameguard");
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const fs = require("fs");
const http = require("http");
const { SubscriptionServer } = require("subscriptions-transport-ws");

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
// const subscriptionsEndpoint = `wss://${url}:${port}${subscriptionsPath}`;
// const subscriptionsEndpoint = `wss://159.203.5.200:${port}${subscriptionsPath}`;
const subscriptionsEndpoint = `wss://142.93.159.223${subscriptionsPath}`;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.M_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("We are connected!"));

app
  .prepare()
  .then(async () => {
    const server = express();

    server.use(helmet());
    server.use(
      helmet({
        frameguard: {
          action: "deny"
        }
      })
    );

    server.use(frameguard({ action: "deny" }));
    server.use(compression());
    server.use(
      express.static(__dirname + "/static", {
        maxAge: "365d"
      })
    );
    const robotsTextOptions = {
      root: __dirname + "/static/",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      }
    };
    server.get("/robots.txt", (req, res) =>
      res.status(200).sendFile("robots.txt", robotsTextOptions)
    );
    //sitemap
    let strains = await resolvers.Query.allStrains(null, { filter: null });
    // let sitemapStrains = strains.map((strain, index) => {
    //   return inferStrainData(strain)
    //     .name.toLowerCase()
    //     .split(" ")
    //     .join("-");
    // });
    // siteMapBuilder(sitemapStrains);
    // //schema markup
    let _strains = strains.map((strain, index) => {
      delete strain._id;
      delete strain.__v;
      return strain;
    });
    // schemaBuilder(JSON.stringify(_strains));
    // // 301 redirects
    // redirects.forEach(({ from, to, type = 301, method = "get" }) => {
    //   server[method](from, (req, res) => {
    //     res.redirect(type, to);
    //   });
    // });

    //routes
    server.use(
      cors({
        origin: "*"
      })
    );
    server.use(
      "/graphql",
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
          endpointURL: "/graphql",
          subscriptionsEndpoint: subscriptionsEndpoint
        })
      );
    }
    server.get("/product/:_id", (req, res) => {
      app.render(req, res, "/product", {});
    });
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
