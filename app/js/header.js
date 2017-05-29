/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import Pages from '../data/pages.json'

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

export default class Header {
  constructor() {
    this.makeHeader()
  }

  makeHeader() {

    let header = document.createElement('header')
    let siteTitleH1 = document.createElement('h1')
    let siteTitleH1Text = document.createTextNode('GotPop')
    let menuUl = document.createElement('ul')

    menuUl.setAttribute('id', 'menu')
    menuUl.setAttribute('class', 'ma-menu')
    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    header.appendChild(menuUl)

    this.loopPages(menuUl)

    document.body.appendChild(header)

  }

  loopPages(menuUl) {
    for (let pageItem of Pages) {
      console.log('Pages', pageItem);
      this.makeList(menuUl, pageItem)
    }

  }

  makeList(menuUl, pageItem) {

        let makeLi = document.createElement('li')
        let makeA = document.createElement('a')
        let makeText = document.createTextNode(pageItem.name)

        makeA.setAttribute('href', '#')

        makeA.addEventListener('click', function() {
          console.log('Loving it!');
        })

        makeLi.setAttribute('class', 'ma-class')

        makeA.appendChild(makeText)
        makeLi.appendChild(makeA)

        menuUl.appendChild(makeLi)

  }

  addListener() {

  }

}
