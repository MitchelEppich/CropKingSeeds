const path = require("path");
const glob = require("glob");
const withSass = require("@zeit/next-sass");

const getPathsObject = require("./scripts/exportPaths");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = withSass({
  cssModules: false,
  webpack(config, { isServer, buildId, dev }) {
    // const workboxOptions = {
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   globPatterns: [".next/static/*", ".next/static/commons/*"],
    //   modifyUrlPrefix: { ".next": "/_next" },
    //   runtimeCaching: []
    // };

    // if (!isServer) {
    //   config.plugins.push(
    //     new NextWorkboxPlugin({
    //       buildId,
    //       ...workboxOptions
    //     }),
    //     new WebpackPwaManifest({
    //       filename: "static/manifest.json",
    //       name: "Crop King Seeds",
    //       short_name: "CKS",
    //       description:
    //         "Buy Feminized & Autoflowering Cannabis Seeds - Crop King Seeds.",
    //       background_color: "#FFF",
    //       crossorigin: "use-credentials",
    //       theme_color: "#ef5753",
    //       display: "standalone",
    //       orientation: "portrait",
    //       fingerprints: true,
    //       inject: true,
    //       start_url: "./",
    //       ios: {
    //         "apple-mobile-web-app-title": "Crop King Seeds",
    //         "apple-mobile-web-app-status-bar-style": "#ef5753"
    //       },
    //       icons: [
    //         {
    //           src: path.resolve("static/icons/cks-logo.png"),
    //           sizes: [96, 128, 192, 256, 384, 512],
    //           destination: path.join("static", "icons")
    //         }
    //       ],
    //       publicPath: ".."
    //     }),
    //     new ManifestPlugin({
    //       fileName: "asset-manifest.json" // Not to confuse with manifest.json
    //     })
    //   );
    // }

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
    return config;
  }
});
