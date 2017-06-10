/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import PagesData from '../site/pages.json'
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
  }

  makeHeader() {

    let header = document.createElement('header')
    let headline = new Html({type: 'h1', text: 'Liam GotPop'}).build()

    console.log('headline: ', headline);

    let menuUl = document.createElement('ul')

    menuUl.setAttribute('id', 'menu')
    menuUl.setAttribute('class', 'ma-menu')

    header.appendChild(headline)
    header.appendChild(menuUl)

    this.loopPagesData(menuUl)

    let makeIcon = new Icon('triangle', 'icon-class')
    let iconTriangle = makeIcon.build()
    header.appendChild(iconTriangle)

    document.body.appendChild(header)

  }

  loopPagesData(menuUl) {
    for (let pageItem of PagesData) {
      this.makeList(menuUl, pageItem)
    }

  }

  makeList(menuUl, pageItem) {

    let makeLi = document.createElement('li')
    let makeA = document.createElement('a')
    let makeText = document.createTextNode(pageItem.name)

    makeA.setAttribute('href', '#' + pageItem.pageId)
    makeA.setAttribute('data-id', pageItem.pageId)

    function listenToThis() {

      siteStatus.currentPage = makeA.getAttribute('data-id')
      let thumbClassArray = document.getElementsByClassName('ma-class')

      for (let thumb of thumbClassArray) {
        thumb.classList.remove('active')
        if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
          makeLi.classList.add('active')
        }
      }

      let maNewPage = new MakePage

    }

    makeA.addEventListener('click', listenToThis)
    makeLi.setAttribute('class', 'ma-class')

    makeA.appendChild(makeText)
    makeLi.appendChild(makeA)
    menuUl.appendChild(makeLi)

    if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
      makeLi.classList.add('active')
    }

  }

  addListener() {}

}
