/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import PagesData from '../site/pages.json'
import Site from '../site/site.json'
import {siteStatus} from '../site/status.js'
import MakePage from '../site/page.js'
import Icon from '../icons'
import Html from '../utils'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export default class Header {
  constructor(siteStatus) {
    this.siteStatus = siteStatus
    this.makeHeader()
    this.addListenerToMenuToggle()
  }

  makeHeader() {

    let header = new Html({type: 'header', class: 'header'}).build()
    let logoWrap = new Html({type: 'section', class: 'header-logo-wrap'}).build()
    let makeIcon = new Icon('triangle', 'icon-class').build()
    let headline = new Html({type: 'h1', class: 'header-title', text: Site.siteTitle}).build()
    let headerNav = new Html({type: 'nav', class: 'header-nav'}).build()
    let menuUl = new Html({type: 'ul', id: 'headerMenu', class: 'header-menu'}).build()
    let makeAWrap = new Html({type: 'a', href: '#'}).build()
    let makeA = new Html({type: 'a', id: 'mobileMenuTrigger', class: 'mobile-menu-trigger'}).build()

    let makeASpan = new Html({type: 'span', class: 'mobile-menu-trigger-burger'}).build()
    let makeASpanText = new Html({type: 'span', class: 'mobile-menu-trigger-text', text: 'Menu'}).build()

    makeA.appendChild(makeASpan)
    makeA.appendChild(makeASpanText)

    header.appendChild(makeAWrap)
    makeAWrap.appendChild(logoWrap)

    logoWrap.appendChild(makeIcon)
    logoWrap.appendChild(headline)

    header.appendChild(headerNav)
    headerNav.appendChild(menuUl)
    header.appendChild(makeA)
    this.loopPagesData(menuUl)

    var maWrap = document.getElementById('wrap-site');
    var theFirstChild = maWrap.firstChild;
    maWrap.insertBefore(header, theFirstChild);

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
      event.preventDefault()
      event.stopPropagation()
      siteStatus.currentPage = makeA.getAttribute('data-id')
      new MakePage

      document.body.classList.remove('menu-open')

      // alert(siteStatus.currentPage)

      let thumbClassArray = document.getElementsByClassName('header-menu-list')

      for (let thumb of thumbClassArray) {
        thumb.classList.remove('active')
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

  addListenerToMenuToggle() {
    let triggered = document.getElementById('mobileMenuTrigger')
    let site = document.getElementById('site')

    triggered.addEventListener('click', function() {
      document.body.classList.toggle('menu-open')
      function clickListener() {
        document.body.classList.remove('menu-open')
        site.removeEventListener('click', clickListener)
      }
      site.addEventListener('click', clickListener)
    })

  }

}
