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
import './js/view.js'

import Github from './js/github.js'
import Canvas from './js/canvas/index.js'


// Temp code
let hello = new Github
let goodbye = new Canvas
console.log('Ma data: ', Site)


// Icons
import Icons from './icons'
let maIcons = new Icons


let testDecode = decodeURI(maIcons.triangle)



console.log('Ma decodeURI: ', testDecode)










import footer from './html/footer.html'

console.log('Ma Html', footer);
