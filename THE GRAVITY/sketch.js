function setup() {
  createCanvas(windowWidth-0.1, windowHeight-0.1);
  frameRate(30);
  imageMode(CENTER);
}

function draw() {
  jogo()
}

function jogo(){
	switch(inicializador){
		case 0: 
					image(imgcomeco, width/2, height/2, width, height); 
					if (keyIsPressed && keyCode == 13){inicializador = 1;}
					break;
		case 1: 
					image(imgcarta, width/2, height/2, width, height);
					if (keyIsPressed && keyCode == 32){inicializador = 2;}
					break;
		case 2:
					gravidade();
					texts()
					break;
	}
}

function gravidade(){
	//fundo
  image(imgceu, width/2, height/2, width, height);
	
	//terra
  image(imgterra, planetaX, planetaY, planetaTamanho, planetaTamanho);
	
	//lua
  image(imglua, posicaoX, posicaoY, tamanho, tamanho);
	
	if(keyIsPressed && keyCode == 83 && teste > 5){
		 teste = 0;
		 colisao = !colisao;
	}
	else teste++;
	
  if (colisao == true) {
  planetaX = mouseX;
  planetaY = mouseY;
	
		
  distancia = dist(posicaoX, posicaoY, planetaX, planetaY);
  if (distancia < 1) {
      distancia = 1;
  }    
		produtoMassa = massa1 * massa2;
    produtoDistancia = distancia * distancia;
    
		//gravidade
    forcaGravitacional = (contanteGravitacional * produtoMassa) / produtoDistancia;
    
    cosa = (planetaX - posicaoX) / distancia;
    sena = (planetaY - posicaoY) / distancia;
    
    forcaHorizontal = forcaGravitacional * cosa;
    forcaVertical = forcaGravitacional * sena;
    
    aceleraçãoX = forcaHorizontal / massa2;
    aceleraçãoY = forcaVertical / massa2;
		
    velocidadeX += aceleraçãoX;
    velocidadeY += aceleraçãoY;
		
		//atualização da posicao da lua
    posicaoX += velocidadeX;
    posicaoY += velocidadeY;
  }
	
	if (posicaoX > width + tamanho || posicaoX < 0 || posicaoY > height + tamanho || posicaoY < 0 ){
		text("Voce deixou a lua escapar, reinicie a simulação imediatamente",10,50);
	}
	
	//colisao
  if (dist(posicaoX, posicaoY, planetaX, planetaY) < planetaTamanho / 2 + tamanho / 2) {
      colisao = false;
		  text("Voce levou o destino dos dinossauro para a humanidade, reinicie a simulação imediatamente",10,50);
    }
}

function texts() {
	textFont(fonte);
	textSize(18);
  fill(255);
	text("Precionar 'S' suspende a simulação",10,25)
}
