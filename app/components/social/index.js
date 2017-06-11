/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

import Html from '../utils'
import Social from './social.json'


/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class Social {
  constructor() {
    this.makeSocial()
  }
  makeSocial() {

    let links = new Html({type: 'div', id: 'social', class: 'social'}).build()

    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    document.body.appendChild(header)

  }
}
