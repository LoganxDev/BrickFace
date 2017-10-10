var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.getElementById('pong');
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete
var width = canvas.width;
var height = canvas.height;
console.log(canvas);
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

function step() {
  update();
  render();
  animate(step);
};

function update() {
};

function Ball() {
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  this.x_speed = 0;
  this.y_speed = 3;
  this.radius = 10;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  context.fillStyle = "#000000";
  canvas.lineWidth = .2;
  // context.stroke();
  context.fill();
};

// var player = new Player();
// var computer = new Computer();
var ball = new Ball();

function render() {
  context.fillStyle = "#FF01FF";
  context.fillRect(0, 0, width, height);
  // player.render();
  // computer.render();
  ball.render();
};

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};