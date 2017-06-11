/////////////////////////////////////////////////
// Import
/////////////////////////////////////////////////

import Html from '../utils'

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

    let maH1 = new Html({type: 'h1', text: this.pageObject.title}).build()
    let maP = new Html({type: 'p', text: this.pageObject.about}).build()

    maSection.appendChild(maH1)
    maSection.appendChild(maP)
    maView.appendChild(maSection)

  }
}
