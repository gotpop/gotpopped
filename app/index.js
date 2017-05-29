// Require static files
require("file-loader?name=[name].[ext]!./img/columbus.jpg");
require("file-loader?name=[name].[ext]!./img/hackett.jpg");
require("file-loader?name=[name].[ext]!./img/offers.jpg");



// Import data
import Site from './data/site.json'
import Pages from './data/pages.json'
import Portfolio from './data/portfolio.json'
import Social from './data/social.json'

// Imports
import './scss/index.scss'

// // Import JS
import './js/site.js'
