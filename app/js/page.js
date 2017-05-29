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

    // console.log(PagesData);

    for (let pageObject of PagesData) {

      // console.log(pageObject)

      if (pageObject.name === "Home") {

        let maView = document.getElementById('view')

        let maH1 = document.createElement('h1')
        let maH1TextNode = document.createTextNode(pageObject.name)

        maH1.appendChild(maH1TextNode)

        maView.appendChild(maH1)

        console.log('Status xxx: ', pageObject)



      }

    }

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

  buildPage() {

  }

}
