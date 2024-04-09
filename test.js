


let canvas = document.createElement(`canvas`);
let context = canvas.getContext(`2d`);

context.fillText(`Привет`, 50, 100)
context.fillStyle = `blue`;
context.fillRect(0, 0, 200, 200);

document.querySelector(`#hm1`).innerText = canvas.toDataURL();
console.log(canvas.toDataURL())