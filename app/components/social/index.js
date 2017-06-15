/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

import Html from '../utils'
import SocialData from './social.json'
import Icon from '../icons'

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class Social {
  constructor(appendHere) {
    this.appendHere = appendHere
    this.makeSocial()
  }
  makeSocial() {

    let linksWrap = new Html({type: 'div', id: 'social', class: 'social'}).build()
    let nav = new Html({type: 'nav', class: 'social-nav'}).build()

    linksWrap.appendChild(nav)

    for (let socialObject of SocialData) {

      let links = new Html({type: 'a', class: 'social-link', href: socialObject.link}).build()
      let makeIcon = new Icon(socialObject.name, 'icon-class').build()
      links.appendChild(makeIcon)
      nav.appendChild(links)

    }

    this.appendHere.appendChild(linksWrap)

  }
}
