import webpack from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackCommonConfig: webpack.Configuration = {
  entry: { index: "./src/index.tsx", another: "./src/another-module.tsx" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }, // ?
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, // ?
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};

export default webpackCommonConfig;
