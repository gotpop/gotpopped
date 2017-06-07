/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import PortfolioData from './portfolio.json'

/////////////////////////////////////////////////
// Work
/////////////////////////////////////////////////

export default class Work {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.maView = document.getElementById('view')
    this.maSection = document.createElement('section')
    this.makeWrap()
  }
  makeWrap() {
    this.loopPortfolioData()
    this.maView.appendChild(this.maSection)
  }

  loopPortfolioData() {
    for (let PortfolioObject of PortfolioData) {
      this.makeThumbnails()
    }
  }

  makeThumbnails() {

    let maDiv = document.createElement('div')

    maDiv.setAttribute('class', 'portfolio-thumbnail')

    this.maSection.appendChild(maDiv)
  }

  addListeners() {}

}
