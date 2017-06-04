/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

import Gradient from './gradients.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.myCanvas = document.createElement("canvas")
    this.mainCanvas = document.getElementById("canvas");
  }
  makeCanvas() {

console.log(this);
    if (this.mainCanvas) {
      this.mainCanvas.remove()
    }

    this.myCanvas.setAttribute('id', 'canvas')
    this.myCanvas.width = this.winWidth
    this.myCanvas.height = this.winHeight
    document.body.appendChild(this.myCanvas)

    // let addGrad = new Gradient()
    // addGrad.build()

  }

}

export class Circle extends Canvas {
  constructor() {
    super()
    this.drawCircle()
  }

  drawCircle() {

    // console.log(this);

    var mainContext = this.mainCanvas.getContext('2d');

    var canvasWidth = this.mainCanvas.width;
    var canvasHeight = this.mainCanvas.height;

    var angle = 0;

    var requestAnimationFrame = window.requestAnimationFrame

    function drawCircle() {
        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);


        var grad = mainContext.createLinearGradient(0, 0, 0, 900)
        grad.addColorStop(0, 'rgba(200,200,200,0)')
        grad.addColorStop(0.45, '#000')
        grad.addColorStop(0.5, '#000')
        grad.addColorStop(0.75, '#000')
        grad.addColorStop(1, 'rgba(200,200,200,0)')


        // color in the background
        mainContext.fillStyle = "#EEEEEE";
        mainContext.fillStyle = grad
        mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

        // draw the circle
        mainContext.beginPath();

        var radius = 25 + 15 * Math.abs(Math.cos(angle));
        mainContext.arc(300, 60, radius, 0, Math.PI * 2, false);
        mainContext.closePath();

        // color in the circle
        mainContext.fillStyle = "#0ff";
        mainContext.fill();

        angle += Math.PI / 64;

        requestAnimationFrame(drawCircle);
    }
    drawCircle();
    this.redraw()
  }



  redraw() {

    // console.log('this', this);

    function maFunction(event) {
        // do stuff here

        this.winWidth = window.innerWidth
        this.winHeight = window.innerHeight
        this.makeCanvas()
        this.drawCircle()

    }

    window.addEventListener('resize', maFunction.bind(this) );

  }



}
