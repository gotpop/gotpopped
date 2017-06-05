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
        let maH1TextNode = document.createTextNode(pageObject.title)

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

  }

  setIds(maView) {

    maView.firstChild.setAttribute('id', 'first')
    maView.firstChild.classList.remove('last')
    maView.firstChild.classList.add('view-item', 'first', 'solo')

    if (maView.childNodes.length > 1) {

      if (maView.childNodes.length > 2) {
        maView.firstChild.remove()
      }

      maView.firstChild.setAttribute('id', 'first')
      maView.firstChild.classList.remove('last', 'solo')
      maView.firstChild.classList.add('view-item', 'first')

      maView.lastChild.setAttribute('id', 'last')
      maView.lastChild.classList.remove('first', 'solo')
      maView.lastChild.classList.add('view-item', 'last')

    }

  }

}
