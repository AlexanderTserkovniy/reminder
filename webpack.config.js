module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist/",
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: "/node_modules/"
      }
    ]
  }
};
