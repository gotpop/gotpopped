export default class Gradient {
  constructor(ctx) {
    this.ctx = ctx
    this.build()
  }

build() {

  var ctx = canvas.getContext('2d');

  var grad = ctx.createLinearGradient(0,50,0,995);
  grad.addColorStop(0.5, '#000');
  grad.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

}
