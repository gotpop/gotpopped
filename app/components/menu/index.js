/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

import PagesData from '../site/pages.json'
import {siteStatus} from '../site/status.js'
import MakePage from '../site/page.js'
import Html from '../utils'
import Icon from '../icons'

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class Menu {
  constructor(appendHere) {
    this.appendHere = appendHere
    this.makeMenu()
  }
  makeMenu() {

    let headerNav = new Html({type: 'nav', class: 'header-nav'}).build()
    let menuUl = new Html({type: 'ul', id: 'headerMenu', class: 'header-menu'}).build()
    headerNav.appendChild(menuUl)
    this.loopPagesData(menuUl)
    this.appendHere.appendChild(headerNav)

  }
  loopPagesData(menuUl) {
    for (let pageItem of PagesData) {
      this.makeList(menuUl, pageItem)
    }
  }
  makeList(menuUl, pageItem) {

    let makeA = new Html({
      type: 'a',
      dataId: pageItem.pageId,
      href: '#' + pageItem.pageId,
      text: pageItem.name
    }).build()

    let makeIcon = new Icon({type: 'skills', class: 'icon'}).build()
    makeA.appendChild(makeIcon)

    let makeLi = new Html({type: 'li', class: 'header-menu-list'}).build()

    makeLi.appendChild(makeA)

    function listenToThis(event) {
      event.stopPropagation()
      siteStatus.currentPage = makeA.getAttribute('data-id')
      new MakePage

      document.body.classList.remove('menu-open')

      let thumbClassArray = document.getElementsByClassName('header-menu-list')

      for (let i = 0; i < thumbClassArray.length; i++) {
        thumbClassArray[i].classList.remove('active')
        if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
          makeLi.classList.add('active')
        }
      }

    }

    makeLi.addEventListener('click', listenToThis)
    menuUl.appendChild(makeLi)

    if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
      makeLi.classList.add('active')
    }

  }
}
