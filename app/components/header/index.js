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
import Menu from '../menu'

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

    new Menu(makeHeader)


    var makeWrap = document.getElementById('wrap-site');
    var theFirstChild = makeWrap.firstChild;
    makeWrap.insertBefore(makeHeader, theFirstChild);

    MenuTriggerVar.addListenerToMenuToggle()
  }

}
