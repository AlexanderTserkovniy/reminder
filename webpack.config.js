module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  }
};
