/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import {siteStatus} from './status'
import PagesData from '../data/pages.json'

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

export default class MakePage {
  constructor() {
      this.loopPageObjects()
  }

  loopPageObjects() {

    for (let pageObject of PagesData) {

      if (pageObject.pageId === siteStatus.currentPage) {

        let maView = document.getElementById('view')
        let maSection = document.createElement('section')
        let maH1 = document.createElement('h1')
        let maH1TextNode = document.createTextNode(pageObject.name)

        maH1.appendChild(maH1TextNode)
        maSection.appendChild(maH1)

        let maP = document.createElement('p')
        let maPText = document.createTextNode(pageObject.about)

        maP.appendChild(maPText)
        maSection.appendChild(maP)
        maView.appendChild(maSection)

        this.setIds(maView)
      }

    }

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

  buildPage() {

  }

  setIds(maView) {
    maView.firstChild.setAttribute('id', 'first')
    maView.firstChild.classList.remove('last')
    maView.firstChild.classList.add('view-item', 'first')

    if (maView.childNodes.length > 1) {
      maView.lastChild.setAttribute('id', 'last')
      maView.lastChild.classList.remove('first')
      maView.lastChild.classList.add('view-item', 'last')
    }

    if (maView.childNodes.length > 2) {
      maView.firstChild.remove()
    }

    console.log(maView.childNodes);
  }

}
