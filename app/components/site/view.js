/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import Html from '../utils'
import {siteStatus} from '../site/status.js'

/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

export default class View {

  constructor() {
    this.makeView()
    this.checkMobileOrDesktop()
  }

  makeView() {
    let wrapSite = new Html({type: 'div', id: 'wrap-site', class: 'wrap-site'}).build()
    let site = new Html({type: 'div', id: 'site', class: 'site'}).build()
    let wrapView = new Html({type: 'div', id: 'wrap-view', class: 'wrap-view'}).build()
    let view = new Html({type: 'div', id: 'view', class: 'view'}).build()

    wrapView.appendChild(view)
    site.appendChild(wrapView)
    wrapSite.appendChild(site)
    document.body.appendChild(wrapSite)

  }
  checkMobileOrDesktop() {

    let mediaQueryList = window.matchMedia('(max-width: 600px)')

    document.body.classList.remove('mobile')
    document.body.classList.remove('mobile')
    if (mediaQueryList.matches) {
      document.body.classList.add('mobile')
    }


    console.log(mediaQueryList);
    function handleMediaChange(event) {
      this.mobile = event.matches
      document.body.classList.remove('mobile')
      if (event.matches) {
        document.body.classList.add('mobile')
      } else {
        document.body.classList.remove('mobile')
      }
    }
    mediaQueryList.addListener(handleMediaChange.bind(this))
    handleMediaChange.bind(this)

  }

}
