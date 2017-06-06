/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import {siteStatus} from './status'
import PagesData from '../data/pages.json'
import Home from '../components/home'

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
          let maHome = new Home(pageObject)
        }

        if (pageObject.template === 'work') {
          console.log('work');
        }

        if (pageObject.template === 'skills') {
          console.log('skills');
        }

        this.setPageIds(maView)
      }

    }

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
