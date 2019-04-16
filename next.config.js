const withSass = require("@zeit/next-sass");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const glob = require("glob");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ANALYZE = process.env.ANALYZE;

module.exports = withSass({
  cssModules: false,
  webpack(config, { isServer, buildId, dev }) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    } else {
      // config.module.rules.push(
      //   {
      //     test: /\.(css|scss|ico|gif|png|jpg|jpeg|svg|webp)/,
      //     loader: "emit-file-loader",
      //     use: [
      //       {
      //         loader: "emit-file-loader",
      //         options: {
      //           name: "dist/[path][name].[ext]"
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     test: /\.css$/,
      //     use: [
      //       "babel-loader",
      //       "raw-loader",
      //       "postcss-loader",
      //       { loader: "style-loader" },
      //       { loader: "css-loader" }
      //     ]
      //   },
      //   {
      //     test: /\.(woff|woff2|eot|ttf)$/,
      //     use: [
      //       {
      //         loader: "url-loader",
      //         options: {
      //           limit: 100000
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     test: /\.s(a|c)ss$/,
      //     use: [
      //       "babel-loader",
      //       "raw-loader",
      //       "postcss-loader",
      //       {
      //         loader: "sass-loader",
      //         options: {
      //           includePaths: ["scss", "node_modules"]
      //             .map(d => path.join(__dirname, d))
      //             .map(g => glob.sync(g))
      //             .reduce((a, c) => a.concat(c), [])
      //         }
      //       }
      //     ]
      //   }
      // );

      config.module.rules.push(
        {
          test: /\.css$/,
          use: ["css-loader"]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/",
            outputPath: "static/"
          }
        }
      );
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };
      ////PURIFY CSS ---> CHANGE TO SASS
      // if (!isServer) {
      //   config.module.rules
      //     .find(({ test }) => test.test("styles.css"))
      //     .use.push({
      //       loader: "css-purify-webpack-loader",
      //       options: {
      //         includes: ["./pages/*.js", "./components/*.js"]
      //       }
      //     });
      // }

      const workboxOptions = {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: [".next/static/*", ".next/static/commons/*"],
        modifyUrlPrefix: {
          ".next": "/_next"
        },
        runtimeCaching: [
          {
            urlPattern: "/",
            handler: "networkFirst",
            options: {
              cacheName: "html-cache"
            }
          },
          {
            urlPattern: new RegExp("^https://dcfgweqx7od72.cloudfront.net/*"),
            handler: "staleWhileRevalidate",
            options: {
              cacheName: "cloudfront",
              cacheableResponse: {
                statuses: [200]
              }
            }
          },
          {
            urlPattern: new RegExp("^https://embed.tawk.to/*"),
            handler: "staleWhileRevalidate",
            options: {
              cacheName: "tawkto",
              cacheableResponse: {
                statuses: [200]
              }
            }
          },
          {
            urlPattern: new RegExp("^https://www.google-analytics.com/*"),
            handler: "staleWhileRevalidate",
            options: {
              cacheName: "ga",
              cacheableResponse: {
                statuses: [200]
              }
            }
          },
          {
            urlPattern: new RegExp("^https://www.cropkingseeds.com/*"),
            handler: "staleWhileRevalidate",
            options: {
              cacheName: "ga",
              cacheableResponse: {
                statuses: [200]
              }
            }
          },
          // {
          //   urlPattern: /[^3]\/movie\//,
          //   handler: "networkFirst",
          //   options: {
          //     cacheName: "html-cache"
          //   }
          // },
          // {
          //   urlPattern: new RegExp("^https://api.themoviedb.org/3/movie"),
          //   handler: "staleWhileRevalidate",
          //   options: {
          //     cacheName: "api-cache",
          //     cacheableResponse: {
          //       statuses: [200]
          //     }
          //   }
          // },
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: "cacheFirst",
            options: {
              cacheName: "image-cache",
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      };

      if (!isServer && !dev) {
        config.plugins.push(
          new NextWorkboxPlugin({
            buildId,
            ...workboxOptions
          }),
          new WebpackPwaManifest({
            filename: "static/manifest.json",
            name: "Crop King Seeds",
            short_name: "CKS",
            description:
              "Crop King Seeds has been perfecting the marijuana seeds industry for medical and commercial growers seeking maximum results in THC levels and harvest size.",
            background_color: "#ffffff",
            theme_color: "#ef5753",
            display: "standalone",
            orientation: "portrait",
            fingerprints: false,
            inject: false,
            start_url: "/",
            ios: {
              "apple-mobile-web-app-title": "Next-PWA",
              "apple-mobile-web-app-status-bar-style": "#ef5753"
            },
            icons: [
              {
                src: path.resolve("static/favicon.ico"),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: "/static"
              }
            ],
            includeDirectory: true,
            publicPath: ".."
          })
        );
      }
    }
    return config;
  }
});
