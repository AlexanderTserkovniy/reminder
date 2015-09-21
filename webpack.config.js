var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist/",
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html",
        exclude: "/node_modules/"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        loader: "style!css",
        exclude: "/node_modules/"
      },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};
