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

    let view = new Html({type: 'div', id: 'view', class: 'view'}).build()
    let site = new Html({type: 'div', id: 'site', class: 'site'}).build()

    site.appendChild(view)
    document.body.appendChild(site)

  }

}
