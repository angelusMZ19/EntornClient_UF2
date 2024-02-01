import { Pilota } from './pilota.js';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  let pelotas = [];

  crearArray();

  function loop() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

   

    pelotas.forEach(pilota => {
      pilota.dibujar(context);
      pilota.mover(canvas); 
    });

    detectarColision();

    requestAnimationFrame(loop);
  }
  function crearArray(){
    for (let i = 0; i < 25; i++) {
      let mida = Math.random() * 10 + 10;//genera aleatoriamente el tamaño de las pelotas
      let x = Math.random() * (canvas.width - mida * 2) + mida;
      let y = Math.random() * (canvas.height - mida * 2) + mida;
      let velocidadX = (Math.random() - 2) * 5;
      let velocidadY = (Math.random() - 2) * 5;
      let color = getRandomColor();
  
      pelotas.push(new Pilota(x, y, velocidadX, velocidadY, color, mida));
    }
  }
  

  function detectarColision() {
    for (let i = 0; i < pelotas.length; i++) {
      for (let j = i + 1; j < pelotas.length; j++) {
        if (colision(pelotas[i], pelotas[j])) {
          pelotas[i].color = getRandomColor();
          pelotas[j].color = getRandomColor();
        }
      }
    }
  }

function colision(p1, p2) {
  let distancia = Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
    if(distancia < p1.radi + p2.radi){
      return distancia;
    }
}
  loop();
});

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

