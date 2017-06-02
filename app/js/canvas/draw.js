class Draw {
  constructor() {
    this.earth = new Image()
    this.earth.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    this.build()
  }
  build() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';


    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow

    let maEarth = this.earth

    ctx.drawImage(maEarth, -12, -12);

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
  }
}
