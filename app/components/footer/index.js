
import Site from '../site/site.json'
import Social from '../social'

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
    let siteTitleH1Text = document.createTextNode(Site.copyright)

    let footerSocial = new Social(footer)
    siteTitleH1.appendChild(siteTitleH1Text)
    footer.appendChild(siteTitleH1)

    let maWrap = document.getElementById('site')


    maWrap.appendChild(footer)


  }
}
