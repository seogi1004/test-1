const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
    onBeforeSetupMiddleware: (server) => {
      server.app.get("/samples", (_, res) => {
        fs.readFile(path.resolve(__dirname, "JNF_DATA.json"), (err, data) => {
          if (err) {
            throw new Error(`error has occurred while reading json: ${err}`);
          }
          res.json(data.toString());
        });
      });
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.svg$/, exclude: /node_modules/, loader: "file-loader" },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
