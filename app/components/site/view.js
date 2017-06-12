/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import Html from '../utils'

/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

export default class View {

  constructor() {
    this.makeView()
  }

  makeView() {
    let wrapSite = new Html({type: 'div', id: 'wrap-site', class: 'wrap-site'}).build()
    let site = new Html({type: 'div', id: 'site', class: 'site'}).build()
    let view = new Html({type: 'div', id: 'view', class: 'view'}).build()


    site.appendChild(view)
    wrapSite.appendChild(site)
    document.body.appendChild(wrapSite)

  }

}
