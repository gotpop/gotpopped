/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

import {siteStatus} from '../site/status.js'
import PortfolioData from './portfolio.json'
import Html from '../utils'

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

export default class MakePortfolioPage {
  constructor() {
    this.maView = document.getElementById('portfolioWrap')
    this.loopPageObjects()
  }

  loopPageObjects() {

    for (let portfolioObject of PortfolioData) {

      if (portfolioObject.ID === siteStatus.currentPortfolioPage) {

        let mawrap = document.createElement('section')
        let maTitle = new Html({type: 'h2', text: portfolioObject.title}).build()
        let maP = new Html({type: 'p', text: portfolioObject.about}).build()

        let maImage = new Image('600', '300')
        maImage.src = portfolioObject.image.src

        mawrap.appendChild(maTitle)
        mawrap.appendChild(maP)
        mawrap.appendChild(maImage)
        this.maView.appendChild(mawrap)

      }

    }
    this.setPageIds()

  }

  setPageIds() {

    this.maView.firstChild.setAttribute('id', 'first')
    this.maView.firstChild.classList.remove('last')
    this.maView.firstChild.classList.add('view-item', 'first', 'solo')

    if (this.maView.childNodes.length > 1) {

      if (this.maView.childNodes.length > 2) {
        this.maView.firstChild.remove()
      }

      this.maView.firstChild.setAttribute('id', 'first')
      this.maView.firstChild.classList.remove('last', 'solo')
      this.maView.firstChild.classList.add('view-item', 'first')

      this.maView.lastChild.setAttribute('id', 'last')
      this.maView.lastChild.classList.remove('first', 'solo')
      this.maView.lastChild.classList.add('view-item', 'last')

    }

  }

}
