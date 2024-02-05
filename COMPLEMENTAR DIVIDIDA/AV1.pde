int cor1, cor2, cor3, cor4;
void setup() {
  size(400, 400);
  colorMode(HSB, 360, 100, 100); 
  cor1 = int(random(0, 360));
  cor2 = (cor1>=180) ? cor1%180-20 : cor1%180+160;
  cor3 = (cor1>=180) ? cor1%180+20 : cor1%180+200;
  print("Precione ENTER para trocar as cores de posição.");
}
void draw() {
  background(cor1, 100, 100);
  noStroke();
  fill(cor2, 100, 100);
  arc(100/400.0*width, 100/400.0*height, 200/400.0*width, 200/400.0*height, radians(0), radians(90), CHORD);
  arc(300/400.0*width, 100/400.0*height, 200/400.0*width, 200/400.0*height, radians(90), radians(180), CHORD);
  arc(100/400.0*width, 300/400.0*height, 200/400.0*width, 200/400.0*height, radians(270), radians(360), CHORD);
  arc(300/400.0*width, 300/400.0*height, 200/400.0*width, 200/400.0*height, radians(180), radians(270), CHORD);


  //triangulo esquerdo
  fill(cor3, 100, 100);
  triangle(100/400.0*width, 300/400.0*height, 100/400.0*width, 200/400.0*height, 200/400.0*width, 300/400.0*height);
  triangle(100/400.0*width, 300/400.0*height, 100/400.0*width, 200/400.0*height, 0/400.0*width, 200/400.0*height);
  triangle(0/400.0*width, 100/400.0*height, 100/400.0*width, 200/400.0*height, 0/400.0*width, 200/400.0*height);
  //triangulo direito
  triangle(200/400.0*width, 100/400.0*height, 300/400.0*width, 100/400.0*height, 300/400.0*width, 200/400.0*height);
  triangle(300/400.0*width, 100/400.0*height, 300/400.0*width, 200/400.0*height, 400/400.0*width, 200/400.0*height);
  triangle(300/400.0*width, 200/400.0*height, 400/400.0*width, 200/400.0*height, 400/400.0*width, 300/400.0*height);
  //triangulo cima
  triangle(100/400.0*width, 100/400.0*height, 100/400.0*width, 200/400.0*height, 200/400.0*width, 100/400.0*height);
  triangle(100/400.0*width, 100/400.0*height, 200/400.0*width, 100/400.0*height, 200/400.0*width, 0/400.0*height);
  triangle(300/400.0*width, 0/400.0*height, 200/400.0*width, 100/400.0*height, 200/400.0*width, 0/400.0*height);
  //triangulo baixo
  triangle(300/400.0*width, 300/400.0*height, 300/400.0*width, 200/400.0*height, 200/400.0*width, 300/400.0*height);
  triangle(300/400.0*width, 300/400.0*height, 200/400.0*width, 400/400.0*height, 200/400.0*width, 300/400.0*height);
  triangle(100/400.0*width, 400/400.0*height, 200/400.0*width, 400/400.0*height, 200/400.0*width, 300/400.0*height);
  
}

void keyPressed(){
  if (keyCode == ENTER){
  cor4 = cor2;
  cor2 = cor1;
  cor1 = cor3;
  cor3 = cor4;
  }
}
