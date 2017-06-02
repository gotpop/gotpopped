// import Gradient from './gradients.js'
// import Draw from './draw.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    // this.makeCanvas()
  }
  makeCanvas() {

    let myCanvas = document.createElement("canvas")
    myCanvas.width = this.winWidth
    myCanvas.height = this.winHeight
    myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(myCanvas)

    var ctx = document.getElementById('canvas').getContext('2d')

    let addGrad = new Gradient
    addGrad.build()
  }

}

class Gradient extends Canvas {

  constructor() {
    super()
    // this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
  }

  build() {
    
var ctx = document.getElementById('canvas').getContext('2d')
    var grad = ctx.createLinearGradient(0, 50, 0, 995);
    grad.addColorStop(0.5, '#000');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    // assign gradients to fill and stroke styles
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

}
