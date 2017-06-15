/////////////////////////////////////////////////
// Import
/////////////////////////////////////////////////

import {siteStatus} from '../site/status.js'
import MakePage from '../site/page.js'
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

    let maH1 = new Html({type: 'h2', text: this.pageObject.title}).build()
    let maP = new Html({type: 'p', text: this.pageObject.about}).build()
    let makeA = new Html({
      type: 'a',
      href: '#work',
      class: 'btn',
      text: 'Veiw'
    }).build()

    function listenToThis(event) {
      event.stopPropagation()
      siteStatus.currentPage = 'work'
      new MakePage
    }
    makeA.addEventListener('click', listenToThis)

    maSection.appendChild(maH1)
    maSection.appendChild(maP)
    maSection.appendChild(makeA)
    maView.appendChild(maSection)

  }
}
