/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

import Gradient from './gradients.js'

export default class Canvas {
  constructor() {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.makeCanvas()
    this.redraw()
  }
  makeCanvas() {

    if (this.mainCanvas) {
      this.mainCanvas.remove()
    }

    this.myCanvas = document.createElement("canvas")
    this.myCanvas.setAttribute('id', 'canvas')

    this.myCanvas.width = this.winWidth
    this.myCanvas.height = this.winHeight

    document.body.appendChild(this.myCanvas)

    this.mainCanvas = document.getElementById("canvas");
    this.mainContext = this.mainCanvas.getContext('2d');

    this.mainContext.clearRect(0, 0, this.winWidth, this.winHeight);

    this.drawGrad()
    // this.drawCircle()

    this.mainContext.fillRect(0, 0, this.winWidth, this.winHeight);
    this.mainContext.fill();
  }

  drawGrad() {

    this.grad = this.mainContext.createLinearGradient(0, 0, 0, 900)

    this.grad.addColorStop(0, 'rgba(200,200,200,0)')
    this.grad.addColorStop(0.45, '#000')
    this.grad.addColorStop(0.5, '#000')
    this.grad.addColorStop(0.75, '#000')
    this.grad.addColorStop(1, 'rgba(200,200,200,0)')

    this.mainContext.fillStyle = this.grad

  }


  drawCircle() {

      this.angle = 0;
      this.requestAnimationFrame = window.requestAnimationFrame


      function drawCircle() {

        this.mainContext.clearRect(0, 0, this.winWidth, this.winHeight);

        // color in the background
        this.mainContext.fillStyle = this.grad
        this.mainContext.fillRect(0, 0, this.winWidth, this.winHeight);

        // draw the circle
        this.mainContext.beginPath();

        var radius = 25 + 150 * Math.abs(Math.cos(this.angle));
        this.mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
        this.mainContext.closePath();

        // color in the circle
        this.mainContext.fillStyle = "#006699";
        this.mainContext.fill();

        this.angle += Math.PI / 64;

        requestAnimationFrame(boundFunction);
      }

      let boundFunction = drawCircle.bind(this)

      boundFunction();
  }



  redraw() {

    function listenForResize() {

      this.winWidth = window.innerWidth
      this.winHeight = window.innerHeight
      this.makeCanvas()
      this.drawGrad()

    }

    window.addEventListener('resize', listenForResize.bind(this) );

  }
}
