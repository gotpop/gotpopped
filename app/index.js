/////////////////////////////////////////////////
// Webpack entry point
// Require site files here
/////////////////////////////////////////////////

import "babel-polyfill";

// Require static files
require("file-loader?name=[name].[ext]!./img/columbus.jpg");
require("file-loader?name=[name].[ext]!./img/hackett.jpg");
require("file-loader?name=[name].[ext]!./img/offers.jpg");

// Imports
import './scss/index.scss'

// // Import JS
import './components/site'
