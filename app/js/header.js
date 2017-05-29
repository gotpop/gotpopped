/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export default class Header {
  constructor() {
    this.makeHeader()
  }
  makeHeader() {
    // Make header
    let view = document.getElementById('view')
    let header = document.createElement('header')
    let siteTitleH1 = document.createElement('h1')
    let siteTitleH1Text = document.createTextNode('GotPop')

    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    view.appendChild(header)

  }
}
