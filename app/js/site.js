/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import Header from '../components/header'
import Footer from '../components/footer'
import Canvas from '../components/canvas'
import Github from './utils/github.js'
import MakePage from './page.js'
import View from './view.js'

/////////////////////////////////////////////////
// DOMContentLoaded
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  // let makeGitHub = new Github
  let maHeader = new Header
  let maView = new View
  let maPage = new MakePage
  let maFooter = new Footer
  let maCanvas = new Canvas

})
