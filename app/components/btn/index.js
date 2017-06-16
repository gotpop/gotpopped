/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

import Html from '../utils'
import Icon from '../icons'
import MakePage from '../site/page.js'
import {siteStatus} from '../site/status.js'

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class Button {
  constructor(appendHere) {
    this.appendHere = appendHere
    this.makeSocial()
  }
  makeSocial() {

    let makeA = new Html({
      type: 'a',
      href: '#work',
      class: 'btn',
      text: 'Veiw projects'
    }).build()

    let makeIcon = new Icon({type: 'bino', class: 'icon'}).build()


    makeA.appendChild(makeIcon)


    function listenToThis(event) {
      event.stopPropagation()
      siteStatus.currentPage = 'work'
      new MakePage
    }
    makeA.addEventListener('click', listenToThis)


    this.appendHere.appendChild(makeA)

  }
}
