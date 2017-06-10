/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import Header from '../header'
import Footer from '../footer'
import Canvas from '../canvas'
import Github from '../utils/github.js'
import MakePage from './page.js'
import View from './view.js'
import Icon from '../icons'
import {siteStatus} from '../site/status.js'

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

  // console.log(siteStatus);

})
