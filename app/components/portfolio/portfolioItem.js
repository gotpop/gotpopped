/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

import {siteStatus} from '../site/status.js'
import PortfolioData from './portfolio.json'

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

export default class MakePortfolioPage {
  constructor() {
    this.loopPageObjects()
  }

  loopPageObjects() {

    for (let portfolioObject of PortfolioData) {

      if (portfolioObject.ID === siteStatus.currentPortfolioPage) {

        let maView = document.getElementById('portfolioWrap')
          let maTitle = document.createElement('h2')
          let maTextNode = document.createTextNode('OIIiiiiiii')

          maTitle.appendChild(maTextNode)

          maView.appendChild(maTitle)

          console.log('Ohhhhhh eeee');

      }

    }
    // this.setPageIds(maView)

  }

  setPageIds(maView) {

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
