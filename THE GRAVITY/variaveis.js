let posicaoX = 500;
let posicaoY = 100;
let tamanho = 30;
let massa2 = tamanho;

let velocidadeX = 0;
let velocidadeY = 0;

let aceleraçãoX = 0.0;
let aceleraçãoY = 0.0;

let forcaGravitacional;
let contanteGravitacional = 10;
//6.67 * 10**-11
let forcaHorizontal;
let forcaVertical;

let cosa, sena;

let planetaX = 0;
let planetaY = 0;
let planetaTamanho = 200;
let massa1 = planetaTamanho;
let produtoMassa;
let produtoDistancia;

let imgterra, imgceu, imglua, imgcomeco, imgcarta;
let colisao = true;
let inicializador = 0;

let fonte;
let teste = 0;

function preload() {
	fonte = loadFont("assets/batmfa__.ttf");
  imgterra = loadImage("assets/terra.png ");
  imgceu = loadImage("assets/ceu.jpg ");
  imglua = loadImage("assets/lua-1.png ");
	//imgcomeco = loadImage("comeco.bmp ")
	imgcomeco = loadImage("assets/gravidades.png ")
	imgcarta = loadImage("assets/explicacao.png ")
}