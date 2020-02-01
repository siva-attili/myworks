const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'development',
    devtool:'sourece-map',
    devServer:{
        port:3001,
        historyApiFallback: true
      }
});