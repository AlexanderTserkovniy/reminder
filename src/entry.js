require("./css/main.css");
require("./css/normalize.css");
require("./sass/styles.scss");

require("./js/plugins.js");

// TODO change this
require("./js/vendor/modernizr.custom.92569");

require("file?name=index.html!./index.html");
/*
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
compiler.run(function () {
// stay silent
});*/
