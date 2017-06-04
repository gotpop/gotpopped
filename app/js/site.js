/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import Header from './header.js'
import View from './view.js'
import Footer from './footer.js'
import Github from './github.js'
import MakePage from './page.js'
import Canvas from '../components/canvas'
import {Circle} from '../components/canvas'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  // let makeGitHub = new Github
  let maHeader = new Header
  let maView = new View
  let maPage = new MakePage
  let maFooter = new Footer

  let maCanvas = new Canvas
  maCanvas.makeCanvas()
  //
  let maCircle = new Circle

  // maCircle.drawCircle()




})
