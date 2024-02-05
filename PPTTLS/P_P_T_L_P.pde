int jogador;
int PC;
PImage Tesoura;
PImage Papel;
PImage Pedra;
PImage Lagarto;
PImage Spock;
PImage fundo;

void setup() {
  size(900, 650);
 fundo = loadImage("assets/fundo.png");

  //Tesoura 1
  Tesoura = loadImage("assets/Tesoura.png");
  //Papel 2
  Papel = loadImage("assets/Papel.png");
  //Pedra 3
  Pedra = loadImage("assets/Pedra.png");
  //Lagarto 4
  Lagarto = loadImage("assets/Lagarto.png");
  //Spock 5
  Spock = loadImage("assets/Spock.png");
}

void draw() {
  image(fundo,0,0);
  noStroke();

  if (jogador!=PC) {
    if (jogador==1) {
      image(fundo,0,0);
      fill(255, 0, 0);
      ellipse(447, 75, 143, 143);
    } else if (jogador==2) {
      image(fundo,0,0);
      fill(255, 0, 0);
      ellipse(625, 211, 141, 141);
    } else if (jogador==3) {
      image(fundo,0,0);
      fill(255, 0, 0);
      ellipse(568, 408, 142, 142);
    } else if (jogador==4) {
      image(fundo,0,0);
      fill(255, 0, 0);
      ellipse(334, 409, 141, 141);
    } else if (jogador==5) {
      image(fundo,0,0);
      fill(255, 0, 0);
      ellipse(274, 211, 140, 140);
    }
  }

  textSize(40);
  fill(0);

  if (jogador==PC) {
    if (jogador==1) {
      image(fundo,0,0);
      fill(255, 0, 0);
      arc(447, 75, 143, 143, radians(270), radians(450));
      fill(0, 0, 255);
      arc(447, 75, 143, 143, radians(90), radians(270));
    } else if (jogador==2) {
      image(fundo,0,0);
      fill(255, 0, 0);
      arc(625, 211, 141, 141, radians(270), radians(450));
      fill(0, 0, 255);
      arc(625, 211, 141, 141, radians(90), radians(270));
    } else if (jogador==3) {
      image(fundo,0,0);
      fill(255, 0, 0);
      arc(568, 408, 142, 142, radians(270), radians(450));
      fill(0, 0, 255);
      arc(568, 408, 142, 142, radians(90), radians(270));
    } else if (jogador==4) {
      image(fundo,0,0);
      fill(255, 0, 0);
      arc(334, 409, 141, 141, radians(270), radians(450));
      fill(0, 0, 255);
      arc(334, 409, 141, 141, radians(90), radians(270));
    } else if (jogador==5) {
      image(fundo,0,0);
      fill(255, 0, 0);
      arc(274, 211, 140, 140, radians(270), radians(450));
      fill(0, 0, 255);
      arc(274, 211, 140, 140, radians(90), radians(270));
    }
  }


  fill(0);
  if (jogador==1) {

    if (PC==3 || PC==5) {
      if (PC==3) text("Você Perdeu, pois Pedra quebra Tesoura.", 125, 600);
      else text("Você Perdeu, pois Spock esmaga Tesoura.", 125, 600);
    } else if (PC==2 || PC==4) {
      if (PC==2) text("Você Ganhou, pois Tesoura corta Papel.", 125, 600);
      else text("Você Ganhou, pois Tesoura decapita Lagarto.", 100, 600);
    } else text("Empate.", 400, 600);
  } 
  else if (jogador==2) {
    if (PC==1 || PC==4) {
      if (PC==1) text("Você Perdeu, pois Tesoura corta Papel.", 150, 600);
      else text("Você Perdeu, pois Lagarto come Papel.", 125, 600);
    } else if (PC==3 || PC==5) {
      if (PC==3) text("Você Ganhou, pois Papel cobre Pedra.", 150, 600);
      else text("Você Ganhou, pois Papel refuta Spock.", 125, 600);
    } else text("Empate.", 400, 600);
  } 
  
  else if (jogador==3) {
    if (PC==1 || PC==4) {
      if (PC ==1) text("Você Ganhou, pois Pedra quebra Tesoura.", 125, 600);
      else text("Você Ganhou, pois Pedra esmaga Lagarto.", 125, 600);
    } else if (PC==2 || PC==5) {
      if (PC==2) text("Você Perdeu, pois Papel cobre Pedra.", 150, 600);
      else text("Você Perdeu, pois Spock vaporiza Pedra.", 125, 600);
    } else text("Empate.", 400, 600);
  } 
  
  else if (jogador==4) {
    if (PC==1 || PC==3) {
      if (PC == 1) text("Você Perdeu, pois Tesoura decapita Lagarto.", 100, 600);
      else text("Você Perdeu, pois Pedra esmaga Lagarto.", 125, 600);
    } else if (PC==2 || PC==5) {
      if (PC == 2) text("Você Ganhou, pois Lagarto come Papel.", 125, 600);
      else text("Você Perdeu, pois Lagarto envenena Spock.", 100, 600);
    } else text("Empate.", 400, 600);
  } 
  
  else {
    if (PC==1 || PC==3) {
      if (PC == 1) text("Você Ganhou, pois Spock esmaga Tesoura.", 125, 600);
      else text("Você Ganhou, pois Spock vaporiza Pedra.", 125, 600);
    } else if (PC==2 || PC==4) {
      if (PC == 2) text("Você Perdeu, pois Papel refuta Spock.", 150, 600);
      else text("Você Perdeu, pois Lagarto envenena Spock.", 100, 600);
    } else if (PC==5) text("Empate.", 400, 600);
  }


  if (PC!=jogador) {

    if (PC==1) {
      fill(0, 0, 255);
      ellipse(448, 75, 143, 143);
    } else if (PC==2) {
      fill(0, 0, 255);
      ellipse(626, 211, 141, 141);
    } else if (PC==3) {
      fill(0, 0, 255);
      ellipse(568, 408, 142, 142);
    } else if (PC==4) {
      fill(0, 0, 255);
      ellipse(334, 409, 141, 141);
    } else if (PC==5) {
      fill(0, 0, 255);
      ellipse(274, 211, 140, 140);
    }
  }

  image(Tesoura, 379, 6);
  image(Papel, 558, 142);
  image(Pedra, 500, 340);
  image(Lagarto, 265, 340);
  image(Spock, 165, 142);
  
  
  if (PC!=1 && PC!=2 && PC!=3 && PC!=4 && PC!=5 ) {
    text("Bem-vindo, tecle o número da sua escolha", 100, 600);}
     else { 
      fill(50,50,50);
      textSize(15);
      text("Para jogar novamente, tecle um número de sua escolha",300,630);}
    
    
  stroke(255, 0, 0);
  strokeWeight(10);
  line(20, 20, 80, 20);
  
  stroke(0, 0, 255);
  strokeWeight(10);
  line(20, 40, 80, 40);
  
  textSize(15);
  fill(0,0,0);
  text("Jogador 1 (Você)",87,25);
  text("Jogador 2 (PC)",87,45);
}


void keyPressed() {
  if (keyCode=='1') {
    jogador=1;
    PC=int(random(1, 6));
  }
  if (keyCode=='2') {
    jogador=2;
    PC=int(random(1, 6));
  }
  if (keyCode=='3') {
    jogador=3;
    PC=int(random(1, 6));
  }
  if (keyCode=='4') {
    jogador=4;
    PC=int(random(1, 6));
  }
  if (keyCode=='5') {
    jogador=5;
    PC=int(random(1, 6));
  }
}
