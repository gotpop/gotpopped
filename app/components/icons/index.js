/////////////////////////////////////////////////
// Icons
/////////////////////////////////////////////////

import triangleSrc from './triangle.svg'
import circleSrc from './circle.svg'
import cubeSrc from './cube.svg'
import binoSrc from './bino.svg'
import lollipopSrc from './lollipop.svg'

/////////////////////////////////////////////////
// Soocial Icons
/////////////////////////////////////////////////

import codepen from './social/codepen.svg'
import github from './social/github.svg'
import linkedin from './social/linkedin.svg'

/////////////////////////////////////////////////
// Class
/////////////////////////////////////////////////

class IconsSrc {

  constructor() {
    this.bino = binoSrc
    this.lollipop = lollipopSrc
    this.triangle = triangleSrc
    this.circle = circleSrc
    this.cube = cubeSrc
    this.codepen = codepen
    this.github = github
    this.linkedin = linkedin
  }

}

export default class Icon {

  constructor(options) {
    this.options = options
    this.iconType = options.type
    this.className = options.class
    this.append = options.append
    this.currentSvg
    this.loopObject()
  }

  loopObject() {

    let iconsObject = new IconsSrc

    for (let key in iconsObject) {
      if (key === this.iconType) {
        let decode = iconsObject[key]
        this.currentSvg = decodeURI(decode)
      }
    }

  }

  removeTextNode(wrap) {

    let check = wrap.childNodes[0]
    check.remove()

  }

  build() {
    let wrap = document.createElement('span')
    wrap.setAttribute('class', this.className)
    wrap.innerHTML = this.currentSvg

    this.removeTextNode(wrap)

    if (this.append !== undefined) {
      this.append.appendChild(this.append)
    } else {
      return wrap
    }

  }
}
