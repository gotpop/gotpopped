/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import {siteStatus} from './status'
import PagesData from './pages.json'
import Home from '../home'
import Work from '../portfolio'
import MakePortfolioPage from '../portfolio'
import Skills from '../skills'

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

export default class MakePage {
  constructor() {
    this.loopPageObjects()
  }

  loopPageObjects() {
    let maView = document.getElementById('view')

    for (let pageObject of PagesData) {

      if (pageObject.pageId === siteStatus.currentPage) {

        if (pageObject.template === 'home') {
          this.setBodyClass(pageObject)
          let maHome = new Home(pageObject)
        }

        if (pageObject.template === 'work') {

          this.setBodyClass(pageObject)
          let portfolioWrap = document.getElementById('portfolioWrap')
          if (portfolioWrap !== null) {
            portfolioWrap.remove()
          }
          let maWork = new Work(pageObject)

        }

        if (pageObject.template === 'skills') {
          this.setBodyClass(pageObject)
          let maSkills = new Skills(pageObject)
        }

      }

    }
    this.setPageIds(maView)

  }

  setBodyClass(thisPageObject) {
      for (let pageObject of PagesData) {
        document.body.classList.remove(pageObject.pageId)
      }
      document.body.classList.add(thisPageObject.pageId)
  }

  setPageIds(maView) {

    maView.firstChild.setAttribute('id', 'first')
    maView.firstChild.classList.remove('last')
    maView.firstChild.classList.add('view-item', 'first', 'solo')

    if (maView.childNodes.length > 1) {

      maView.firstChild.remove()
      if (maView.childNodes.length > 2) {
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
