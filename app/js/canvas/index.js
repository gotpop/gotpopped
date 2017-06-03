/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

import Gradient from './gradients.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.myCanvas = document.createElement("canvas")
    // this.makeCanvas()
  }
  makeCanvas() {

    this.myCanvas.width = this.winWidth
    this.myCanvas.height = this.winHeight
    this.myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(this.myCanvas)

    // var ctx = document.getElementById('canvas').getContext('2d')

    let addGrad = new Gradient()
    addGrad.build()
  }

}
