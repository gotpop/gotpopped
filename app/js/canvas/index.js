export default class Canvas {
  constructor() {
    this.earth = new Image()
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.earth.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    this.makeCanvas()
  }
  makeCanvas() {

    var earth = new Image()
    let winWidth = window.innerWidth
    let winHeight = window.innerHeight
    let myCanvas = document.createElement("canvas")
    myCanvas.width = winWidth
    myCanvas.height = winHeight
    myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(myCanvas)
    var ctx = document.getElementById('canvas').getContext('2d')

    let radgrad = ctx.createRadialGradient(245, 245, 50, 252, 250, 200);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    ctx.fillStyle = radgrad;

    function init() {
      window.requestAnimationFrame(draw)
    }

    function draw() {

      ctx.clearRect(0, 0, winWidth, winHeight) // clear canvas
      ctx.save()
      // ctx.translate(100, 300)

      ctx.fillRect(0, 0, winWidth, winHeight);

      var time = new Date()
      ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
      ctx.drawImage(earth, 0, 0);
      ctx.restore();
      window.requestAnimationFrame(draw)
    }

    init()

  }
}
