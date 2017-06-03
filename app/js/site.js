/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import Header from './header.js'
import View from './view.js'
import Footer from './footer.js'
import Canvas from './canvas/index.js'
import Github from './github.js'
import MakePage from './page.js'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  let maHeader = new Header
  let maView = new View
  let maPage = new MakePage
  let maFooter = new Footer
  let maCanvas = new Canvas


    maCanvas.makeCanvas()
    maCanvas.drawCircle()

  // let makeGitHub = new Github

})
