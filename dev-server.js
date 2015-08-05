/**
 * Created by Oleksandr Tserkovnyi on 05.08.2015.
 * kemperomg@gmail.com
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var devServer = new WebpackDevServer(
  webpack(config),
  {
    contentBase: './src',
    publicPath: '/dist'
  }
).listen(8088, 'localhost');