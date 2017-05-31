/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

export default class View {

  constructor() {
    this.makeView()
  }

  makeView() {

    let view = document.createElement('div')
    view.setAttribute('id', 'view')
    view.setAttribute('class', 'view')

    let site = document.createElement('div')
    site.appendChild(view)
    site.setAttribute('id', 'site')
    site.setAttribute('class', 'site')


    document.body.appendChild(site)

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

}
