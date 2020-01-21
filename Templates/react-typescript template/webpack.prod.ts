import webpackMerge = require("webpack-merge");
import webpackCommonConfig from "./webpack.common";
import webpack = require("webpack");

const webpackProdConfig: webpack.Configuration = {
  mode: "production"
  // devtool: "source-map" ?
};

export default webpackMerge(webpackCommonConfig, webpackProdConfig);
