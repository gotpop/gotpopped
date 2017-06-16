/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

import Html from '../utils'
import {siteStatus} from '../site/status.js'
import Site from '../site/site.json'

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

export default class MenuTrigger {
  constructor(appendHere) {
    this.appendHere = appendHere
    this.makeTrigger()
  }
  makeTrigger() {

    let makeA = new Html({type: 'a', id: 'mobileMenuTrigger', class: 'mobile-menu-trigger'}).build()
    new Html({type: 'span', class: 'mobile-menu-trigger-burger', append: makeA})
    let makeASpanText = new Html({type: 'span', class: 'mobile-menu-trigger-text', text: 'Menu'}).build()
    makeA.appendChild(makeASpanText)

    this.appendHere.appendChild(makeA)

  }
  addListenerToMenuToggle() {
    let triggered = document.getElementById('mobileMenuTrigger')
    let site = document.getElementById('site')

    triggered.addEventListener('click', function() {
      document.body.classList.toggle('menu-open')
      function clickListener() {
        document.body.classList.remove('menu-open')
        site.removeEventListener('click', clickListener)
      }
      site.addEventListener('click', clickListener)
    })

  }
}
