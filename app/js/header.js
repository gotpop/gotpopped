/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import PagesData from '../data/pages.json'
import {siteStatus} from './status'
import MakePage from './page.js'
import Icon from '../icons'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export default class Header {
  constructor() {
    this.makeHeader()
  }

  makeHeader() {

    let header = document.createElement('header')
    let siteTitleH1 = document.createElement('h1')
    let siteTitleH1Text = document.createTextNode('GotPop')
    let menuUl = document.createElement('ul')

    menuUl.setAttribute('id', 'menu')
    menuUl.setAttribute('class', 'ma-menu')
    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    header.appendChild(menuUl)

    this.loopPagesData(menuUl)


///////////////////////////////////////

    let iconTriangle = new Icon('triangle', 'icon-class')

    // console.log('iconTriangle', iconTriangle.wrapSvg());
    // header.appendChild('iconTriangle.wrapSvg()')


/////////////////////////////////////////


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

    makeA.setAttribute('href', '#')
    makeA.setAttribute('data-id', pageItem.pageId)

    function listenToThis() {
      siteStatus.currentPage = makeA.getAttribute('data-id')
      let maNewPage = new MakePage
      console.log(siteStatus)
    }

    makeA.addEventListener('click', listenToThis)
    makeLi.setAttribute('class', 'ma-class')

    makeA.appendChild(makeText)
    makeLi.appendChild(makeA)
    menuUl.appendChild(makeLi)

  }

  addListener() {}

}
