/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import {siteStatus} from './status'
import PagesData from '../data/pages.json'




export default class MakePage {
  constructor() {
      this.loopPageObjects()
  }

  loopPageObjects() {


    for (let pageObject of PagesData) {

      // console.log(pageObject)

console.log('pageObject.name', pageObject.name)
console.log('siteStatus.currentPage', siteStatus.currentPage)

      if (pageObject.pageId === siteStatus.currentPage) {

        console.log('Made a page!');

        let maView = document.getElementById('view')
        let maSection = document.createElement('section')
        let maH1 = document.createElement('h1')
        let maH1TextNode = document.createTextNode(pageObject.name)

        maH1.appendChild(maH1TextNode)
        maSection.appendChild(maH1)

        let maP = document.createElement('p')
        let maPText = document.createTextNode(pageObject.about)

        maP.appendChild(maPText)
        maSection.appendChild(maP)
        maView.appendChild(maSection)

        console.log('Status xxx: ', pageObject)

      }

    }

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

  buildPage() {

  }

}
