const path = require("path");
const glob = require("glob");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { dev }) => {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    } else {
      config.module.rules.push(
        {
          test: /\.(css|scss|ico|gif|png|jpg|jpeg|svg|webp)/,
          loader: "emit-file-loader",
          use: [
            {
              loader: "emit-file-loader",
              options: {
                name: "dist/[path][name].[ext]"
              }
            },
            {
              loader: "file-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            "babel-loader",
            "raw-loader",
            "postcss-loader",
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 100000
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            "babel-loader",
            "raw-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                includePaths: ["scss", "node_modules"]
                  .map(d => path.join(__dirname, d))
                  .map(g => glob.sync(g))
                  .reduce((a, c) => a.concat(c), [])
              }
            }
          ]
        }
      );
    }

    return config;
  }
};

const withSass = require("@zeit/next-sass");
module.exports = withSass();
