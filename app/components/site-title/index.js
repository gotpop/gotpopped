/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

import Html from '../utils'
import Icon from '../icons'
import MakePage from '../site/page.js'
import {siteStatus} from '../site/status.js'
import Site from '../site/site.json'

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class SiteTitle {
  constructor(appendHere) {
    this.appendHere = appendHere
    this.makeTitle()
  }
  makeTitle() {


    let logoWrap = new Html({type: 'section', class: 'header-logo-wrap'}).build()
    let makeIcon = new Icon({type: 'lollipop', class: 'icon'}).build()
    logoWrap.appendChild(makeIcon)
    new Html({type: 'h1', class: 'header-title', text: Site.siteTitle, append: logoWrap})
    let makeAWrap = new Html({type: 'a', href: '#home', class: 'header-logo-a-wrap'}).build()
    makeAWrap.appendChild(logoWrap)


    function listenToThis() {
      siteStatus.currentPage = 'home'
      document.body.classList.remove('menu-open')
      new MakePage
    }
    makeAWrap.addEventListener('click', listenToThis)


    this.appendHere.appendChild(makeAWrap)

  }
}
