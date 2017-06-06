/////////////////////////////////////////////////
// Footer
/////////////////////////////////////////////////

export default class Footer {
  constructor() {
    this.makeFooter()
  }
  makeFooter() {
    
    let view = document.getElementById('view')
    let header = document.createElement('footer')
    let siteTitleH1 = document.createElement('small')
    let siteTitleH1Text = document.createTextNode('GotPop footer')

    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    document.body.appendChild(header)

  }
}
