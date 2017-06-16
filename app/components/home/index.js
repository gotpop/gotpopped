/////////////////////////////////////////////////
// Import
/////////////////////////////////////////////////

import {siteStatus} from '../site/status.js'
import Html from '../utils'
import Button from '../btn'

/////////////////////////////////////////////////
// Home
/////////////////////////////////////////////////

export default class Home {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.makeHome()
  }
  makeHome() {

    let maView = document.getElementById('view')
    let maSection = document.createElement('section')

    let maH1 = new Html({type: 'h2', text: this.pageObject.title}).build()
    let maP = new Html({type: 'p', text: this.pageObject.about}).build()

    maSection.appendChild(maH1)
    maSection.appendChild(maP)

    let homeButton = new Button(maSection)

    maView.appendChild(maSection)

  }
}
