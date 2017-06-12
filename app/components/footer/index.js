/////////////////////////////////////////////////
// Footer
/////////////////////////////////////////////////

export default class Footer {
  constructor() {
    this.makeFooter()
  }
  makeFooter() {

    let view = document.getElementById('view')
    let footer = document.createElement('footer')
    let siteTitleH1 = document.createElement('small')
    let siteTitleH1Text = document.createTextNode('GotPop footer')

    siteTitleH1.appendChild(siteTitleH1Text)
    footer.appendChild(siteTitleH1)

    let maWrap = document.getElementById('site')
    maWrap.appendChild(footer)


  }
}
