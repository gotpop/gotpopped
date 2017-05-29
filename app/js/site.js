/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import Header from './header.js'
import View from './view.js'
import Footer from './footer.js'
import Canvas from './canvas/index.js'
import Status from './status.js'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export let siteStatus = new Status
console.log(siteStatus)

document.addEventListener("DOMContentLoaded", function() {

  let maHeader = new Header
  let maView = new View
  let maFooter = new Footer
  let maCanvas = new Canvas

})
