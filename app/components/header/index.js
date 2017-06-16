/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import PagesData from '../site/pages.json'
import Site from '../site/site.json'
import {siteStatus} from '../site/status.js'
import MakePage from '../site/page.js'
import Icon from '../icons'
import Html from '../utils'
import SiteTitle from '../site-title'
import MenuTrigger from '../menu-trigger'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export default class Header {
  constructor(siteStatus) {
    this.siteStatus = siteStatus
    this.makeHeader()
  }

  makeHeader() {

    let makeHeader = new Html({type: 'header', class: 'header'}).build()
    new SiteTitle(makeHeader)
    let MenuTriggerVar = new MenuTrigger(makeHeader)

    let headerNav = new Html({type: 'nav', class: 'header-nav'}).build()
    makeHeader.appendChild(headerNav)
    let menuUl = new Html({type: 'ul', id: 'headerMenu', class: 'header-menu'}).build()
    headerNav.appendChild(menuUl)
    this.loopPagesData(menuUl)

    var makeWrap = document.getElementById('wrap-site');
    var theFirstChild = makeWrap.firstChild;
    makeWrap.insertBefore(makeHeader, theFirstChild);

    MenuTriggerVar.addListenerToMenuToggle()
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
