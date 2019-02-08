const { inferStrainData } = require("../store/utilities/strain");
const siteMapBuilder = require("../scripts/postBuild.js");
const redirects = require("../scripts/redirects.js");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");

const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const { createServer } = require("http");
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
// const subscriptionsEndpoint = `ws://${url}:${port}${subscriptionsPath}`;
// const subscriptionsEndpoint = `ws://159.203.5.200:3000${subscriptionsPath}`;
const subscriptionsEndpoint = `ws://192.168.0.51:3000${subscriptionsPath}`;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.M_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("We are connected!"));

app.prepare()
    .then(async () => {
        const server = express();

        //sitemap
        // let strains = await resolvers.Query.allStrains(null, {});
        // strains = strains.map((strain, index) => {
        //     return inferStrainData(strain)
        //         .name.toLowerCase()
        //         .split(" ")
        //         .join("-");
        // });
        // siteMapBuilder(strains);

        // 301 redirects
        redirects.forEach(({ from, to, type = 301, method = "get" }) => {
            server[method](from, (req, res) => {
                res.redirect(type, to);
            });
        });

        server.use(
            cors({
                origin: "*"
            })
        );

        server.use(compression());
        server.use(
            "/static",
            express.static(__dirname + "/static", {
                maxAge: "365d"
            })
        );

        server.use(
            "/graphql",
            bodyParser.json(),
            graphqlExpress((req, res) => {
                return {
                    schema,
                    context: {
                        token: req.headers.authorization ? req.headers.authorization.substring("Bearer ".length) : ""
                    }
                };
            })
        );
        server.use(
            "/graphiql",
            graphiqlExpress({
                endpointURL: "/graphql",
                subscriptionsEndpoint: subscriptionsEndpoint
            })
        );

        server.get("/product/:_id", (req, res) => {
            app.render(req, res, "/product", {});
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        const ws = createServer(server);
        ws.listen(port, url, () => {
            console.log(`Apollo Server is now running on https://${url}:${port}`);
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
