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
import '../utils/removePolyfill.js'

/////////////////////////////////////////////////
// DOMContentLoaded
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  let maView = new View
  let maHeader = new Header
  let maPage = new MakePage
  let maFooter = new Footer

})
