// tamanho[0], x, y e velocidade dos carros ambu,vermelho,amarelo,policia,prata, nessa ordem.
valoresCarros = [];

//Variáveis do sapo.
let sapoY,sapoX, sapoTamanho;

//Variáveis dos pontos.
let pontos = 0, inicializador = 1, moves = true, tempos = 0;

var estado;
let CIM = 1, BAI = 2, ESQ = 3, DIR = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //imagens e fonte
  estado = CIM;
  sapoY = height-55,sapoX = width/2-80, sapoTamanho = 40;
  valoresCarros = [
    [91, 51],
  
    [0.06 * width , 0.26 * height, 23],
    [100, 0.39 * height, 18],
    [200, 0.53 * height, 15],
    [300, 0.66 * height, 14],
    [350, 0.81 * height, 12],
  ];

	frameRate(30)
}

function draw() {
  inicio();

  switch(inicializador){
    case 1: image(telaInicio, 0, 0, width, height); break;
    case 2: jogo(); break
    case 3: telaFinal(); break;
  }

}


function inicio() {
  if (inicializador == 1) {
    image(telaInicio, 0, 0, width, height);
  }
}

function jogo() {
    //Tela do jogo.
    image(telaJogo, 0, 0, width, height);
    //Sapo ao lado do texto do objetivo.
    image(sapoObj, 0.935 *width, 0.016 * height, 47, 58);
    //sapinho.
    jogador();
    //carros.
    carros();
    //colisao sapinho/carros.
    colisao();

    if(pontos >= 3){
      inicializador = 3;
      console.log(pontos)
    }
}

function jogador() {
  //O Sapo.
  mostraSapo(estado);
  
  //Movimentação do sapo
  movimento();
  
  if (moves == false) {
    tempos++;
    if (tempos > 20) {
      moves = true;
      tempos = 0;
    }
  }
  
  limiteTela();
}

function limiteTela() {
  //Limite de tela pro sapo.
  if (sapoY <= 0.116 * height) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos++;
    moves = false;
  }
  if (sapoY + sapoTamanho > height) {
    sapoY = height - sapoTamanho;
  }
  if (sapoX <= 0) {
    sapoX = 0;
  }
  if (sapoX + sapoTamanho >= width) {
    sapoX = width - sapoTamanho;
  }
}

function movimento(){
  if (keyIsPressed && moves == true) {
    if (keyCode == "87") {
      sapoY -= 8;
      estado = CIM;
    }
    if (keyCode == "83") {
      sapoY += 8;
      estado = BAI;
    }
    if (keyCode == "68") {
      sapoX += 8;
      estado = DIR;
    }
    if (keyCode == "65") {
      sapoX -= 8;
      estado = ESQ;
    }
  }
}

function mostraSapo(estado){
  if(estado == CIM) image(SAPOW,sapoX,sapoY,sapoTamanho,sapoTamanho);
  else if(estado == BAI) image(SAPOS,sapoX,sapoY,sapoTamanho,sapoTamanho);
  else if(estado == ESQ) image(SAPOA,sapoX,sapoY,sapoTamanho,sapoTamanho);
  else if(estado == DIR) image(SAPOD,sapoX,sapoY,sapoTamanho,sapoTamanho);
}

function carros() {
  //Carros; Movimentação. Dois carros vão ser mais rápidos do que os outros (ambulância e polícia).
  image(ambu, valoresCarros[1][0], valoresCarros[1][1], valoresCarros[0][0], valoresCarros[0][1]);
  image(carroVermelho, valoresCarros[2][0], valoresCarros[2][1], valoresCarros[0][0], valoresCarros[0][1]);
  image(carroAmarelo, valoresCarros[3][0], valoresCarros[3][1], valoresCarros[0][0], valoresCarros[0][1]);
  image(policia, valoresCarros[4][0], valoresCarros[4][1], valoresCarros[0][0], valoresCarros[0][1]);
  image(carroPrata, valoresCarros[5][0], valoresCarros[5][1], valoresCarros[0][0], valoresCarros[0][1]);
  movimentoCarros();
}

function movimentoCarros() {
  valoresCarros[1][0] -= valoresCarros[1][2];
  valoresCarros[2][0] += valoresCarros[2][2];
  valoresCarros[3][0] += valoresCarros[3][2];
  valoresCarros[4][0] -= valoresCarros[4][2];
  valoresCarros[5][0] += valoresCarros[5][2];
  
  if (valoresCarros[1][0] + valoresCarros[0][0] <= 0 ) {
    valoresCarros[1][0] = width;
    valoresCarros[1][2] = random(25, 30);
  }
  if (valoresCarros[2][0] >= width) {
    valoresCarros[2][0] = 0;
    valoresCarros[2][2] = random(18, 23);
  }
  if (valoresCarros[3][0] >= width) {
    valoresCarros[3][0] = 0;
    valoresCarros[3][2] = random(18, 20);
  }
  if (valoresCarros[4][0] + valoresCarros[0][0] <= 0) {
    valoresCarros[4][0] = width;
    valoresCarros[4][2] = random(15, 23);
  }
  if (valoresCarros[5][0] >= width) {
    valoresCarros[5][0] = 0;
    valoresCarros[5][2] = random(18, 40);
  }
  
}

function colisao() {
  //Colisão do sapo com os carros. Se o sapo colidir com algum dos carros os pontos voltarão para 0; Os pontos não ficam negativos.

  if (
    sapoY + sapoTamanho >= valoresCarros[1][1] &&
    sapoY < valoresCarros[1][1] + valoresCarros[0][1] &&
    sapoX + sapoTamanho >= valoresCarros[1][0] &&
    sapoX <= valoresCarros[1][0] + valoresCarros[0][0]
  ) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos--;
    moves = false;
    estado = CIM;
    if (pontos < 0);
    pontos = 0;
  }

  if (
    sapoY + sapoTamanho >= valoresCarros[2][1] &&
    sapoY < valoresCarros[2][1] + valoresCarros[0][1] &&
    sapoX + sapoTamanho >= valoresCarros[2][0] &&
    sapoX <= valoresCarros[2][0] + valoresCarros[0][0]
  ) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos--;
    moves = false;
    estado = CIM;
    if (pontos < 0);
    pontos = 0;
  }

  if (
    sapoY + sapoTamanho >= valoresCarros[3][1] &&
    sapoY < valoresCarros[3][1] + valoresCarros[0][1] &&
    sapoX + sapoTamanho >= valoresCarros[3][0] &&
    sapoX <= valoresCarros[3][0] + valoresCarros[0][0]
  ) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos--;
    moves = false;
    estado = CIM;
    if (pontos < 0);
    pontos = 0;
  }

  if (
    sapoY + sapoTamanho >= valoresCarros[4][1] &&
    sapoY < valoresCarros[4][1] + valoresCarros[0][1] &&
    sapoX + sapoTamanho >= valoresCarros[4][0] &&
    sapoX <= valoresCarros[4][0] + valoresCarros[0][0]
  ) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos--;
    moves = false;
    estado = CIM;
    if (pontos < 0);
    pontos = 0;
  }

  if (
    sapoY + sapoTamanho >= valoresCarros[5][1] &&
    sapoY < valoresCarros[5][1] + valoresCarros[0][1] &&
    sapoX + sapoTamanho >= valoresCarros[5][0] &&
    sapoX <= valoresCarros[5][0] + valoresCarros[0][0]
  ) {
    sapoY = height-55;
    sapoX = width/2-80;  
    pontos--;
    moves = false;
    estado = CIM;
    if (pontos < 0);
    pontos = 0;
  }
  textos();
}

function keyPressed() {
  if (inicializador) {
    if (keyCode == "13" || keyCode == "70") {
      inicializador = 2;
      pontos = 0;
    }
  }
}

function textos() {
  //Texto de pontos
  textSize(0.024*width);
  textFont(symText);
  fill(0, 255, 0);
  text("Pontos: " + pontos, 0.025*width, 0.08 * height);
  text("Atinja 3 pontos para", 0.6 * width, 0.066 * height);
  text("vencer!", 0.69 * width, 0.11 * height);
  //Texto da condição de vitória
  
}

function telaFinal() { 
    image(telaVitoria,0,0,width,height);
    sapoY = height-55;
    sapoX = width/2-80;  
}