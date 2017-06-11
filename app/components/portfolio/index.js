/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import PortfolioData from './portfolio.json'
import MakePortfolioPage from './PortfolioItem'
import {siteStatus} from '../site/status.js'
import Html from '../utils'

/////////////////////////////////////////////////
// Work
/////////////////////////////////////////////////

export default class Work {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.maView = document.getElementById('view')
    this.maSection = document.createElement('section')
    this.maThumbnailWrap = document.createElement('div')
    this.portfolioWrap = document.createElement('div')
    this.makeWrap()
  }
  makeWrap() {

    this.maThumbnailWrap.setAttribute('class', 'portfolio-thumbnails')
    this.maSection.appendChild(this.maThumbnailWrap)

    this.portfolioWrap.setAttribute('id', 'portfolioWrap')
    this.maSection.appendChild(this.portfolioWrap)

    this.loopPortfolioData()

    this.maView.appendChild(this.maSection)

    let maMakePortfolioPage = new MakePortfolioPage
  }

  loopPortfolioData() {
    for (let PortfolioObject of PortfolioData) {
      this.makeThumbnails(PortfolioObject)
    }
  }

  makeThumbnails(PortfolioObject) {

    let maDiv = new Html({
      type: 'div',
      class: 'portfolio-thumbnail',
      dataId: PortfolioObject.ID
    }).build()
    this.maThumbnailWrap.appendChild(maDiv)

    function listenToThis() {
      siteStatus.currentPortfolioPage = maDiv.getAttribute('data-id')
      let thumbClassArray = document.getElementsByClassName('portfolio-thumbnail')

      for (let thumb of thumbClassArray) {
        thumb.classList.remove('active')
        if (siteStatus.currentPortfolioPage == maDiv.getAttribute('data-id')) {
          maDiv.classList.add('active')
        }
      }
      new MakePortfolioPage
    }

    maDiv.addEventListener('click', listenToThis)

    if (siteStatus.currentPortfolioPage === maDiv.getAttribute('data-id')) {
      maDiv.classList.add('active')
    }

  }

  addListeners() {}

}
