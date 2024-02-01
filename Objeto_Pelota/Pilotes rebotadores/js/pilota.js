export class Pilota {
    constructor(x, y, vX, vY, color, radi) {
      this.x = x;
      this.y = y;
      this.vX = vX;
      this.vY = vY;
      this.color = color;
      this.radi = radi;
    }
  
    mover(canvas) {
      this.x += this.vX;
      this.y += this.vY;
  
      if(this.x + this.radi > canvas.width || this.x - this.radi < 0) {
        this.vX = -this.vX;
      }
  
      if (this.y + this.radi > canvas.height || this.y - this.radi < 0) {
        this.vY = -this.vY;
      }
    }
  
    dibujar(context) {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radi, 0, Math.PI * 2);
      context.fill();
    }
  }
  