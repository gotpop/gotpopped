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

    let header = new Html({type: 'header'}).build()
    let headline = new Html({type: 'h1', text: Site.siteTitle}).build()
    let menuUl = new Html({type: 'ul', id: 'menu', class: 'ma-menu'}).build()
    let makeIcon = new Icon('triangle', 'icon-class').build()

    let makeA = new Html({
      type: 'a',
      href: '#',
      id: 'mobileMenuTrigger',
      class: 'mobile-menu-trigger',
      text: 'X'
    }).build()


    header.appendChild(headline)
    header.appendChild(makeIcon)
    header.appendChild(menuUl)
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

    let makeLi = new Html({type: 'li', class: 'ma-class'}).build()

    makeLi.appendChild(makeA)

    function listenToThis(event) {
      event.preventDefault()
      event.stopPropagation()
      siteStatus.currentPage = makeA.getAttribute('data-id')

      alert(siteStatus.currentPage)

      // let thumbClassArray = document.getElementsByClassName('ma-class')
      //
      // for (let thumb of thumbClassArray) {
      //   thumb.classList.remove('active')
      //   if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
      //     makeLi.classList.add('active')
      //   }
      // }

      new MakePage
    }

    makeLi.addEventListener('click', listenToThis)


    // makeLi.addEventListener('touchstart', function(event) {
    //   // alert('Touch me!')
    //   // event.preventDefault()
    //   event.stopPropagation()
    //
    //   siteStatus.currentPage = makeA.getAttribute('data-id')
    //   let thumbClassArray = document.getElementsByClassName('ma-class')
    //
    //   for (let thumb of thumbClassArray) {
    //     thumb.classList.remove('active')
    //     if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
    //       makeLi.classList.add('active')
    //     }
    //   }
    //
    //   new MakePage
    // })



    menuUl.appendChild(makeLi)

    if (siteStatus.currentPage === makeA.getAttribute('data-id')) {
      makeLi.classList.add('active')
    }

  }

  addListenerToMenuToggle() {
    let triggered = document.getElementById('mobileMenuTrigger')

    triggered.addEventListener('click', function() {
      document.body.classList.toggle('menu-open')
    })
  }

}
