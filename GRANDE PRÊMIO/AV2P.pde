int n = 5;
int l;
int escolhaX = n;
int escolhaY = n;
int premio = 1000;
int[][] Aposta;
int[][] D = new int[n][n];
boolean desativa = false;
PFont font;
// se abrir todos as tela ou se desistir

void setup() {
  size(800, 500);
  l = (width-300)/n;
  textSize(25);
  Aposta = geraMatriz(n, -1000, 1000);
}

void draw() {
  background(255);
  jogo();
}

void painel(){
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(0);
  rectMode(CENTER);
  rect(650,300,110,60);
  fill(255);
  text("Parar", 650,300);
}
void jogo() {
  if (!desativa) {
    painel();
    fill(0);
    text("Você tem \n" + "$" + premio, 650,150);
    rectMode(CORNER);
    for (int i=0; i<n; i++) {
      for (int j=0; j<n; j++) {
        if (D[i][j]==1) fill(255, 0, 0);
        else if (D[i][j]==2) fill(0, 255, 0);
        else fill(255);
        stroke(0);
        rect(i*l, j*l, l, l);
        if (D[i][j]==1 || D[i][j]== 2) {
          fill(0, 0, 0);
          textAlign(CENTER);
          text(Aposta[i][j], i*l+50, j*l+55);
        }
      }
    }
    if(premio<=0) {
      println("perdeu!");
      desativa = true;
    }
    
    if(mousePressed && mouseX>595 && mouseX<705 && mouseY>270 && mouseY<330){
        println(mouseX + " " + mouseY);
      desativa = true;
    }
  } else {
      if(premio>0){
        background(0,150,0);
        font = createFont("Arial Black", 32);
        textFont(font);
        text("Você ganhou $" + premio + ",\n Parabéns." , 400, 230);      
      }
      else{
        background(150,0,0);
        font = createFont("Arial Black", 32);
        textFont(font);
        text("Você perdeu tudo,\n não vai ganhar nada!", 400, 230);      
      }
  }
}
void mousePressed() {
  if (!desativa && mouseX<=500) {
    escolhaX = mouseX/l;
    escolhaY = mouseY/l;
    if (Aposta [escolhaX][escolhaY] <= 0 && D[escolhaX][escolhaY] == 0) {
      D[escolhaX][escolhaY] = 1;
      premio = premio + Aposta[escolhaX][escolhaY];
    }
    if (Aposta [escolhaX][escolhaY] > 0 && D[escolhaX][escolhaY] == 0) {
      D[escolhaX][escolhaY] = 2;
      premio = premio + Aposta[escolhaX][escolhaY];
    }
  }  
}

int[][] geraMatriz(int n, int vi, int vf) {
  int [][] temp = new int [n] [n];
  for (int i=0; i<n; i++) {
    for (int j=0; j<n; j++) {
      temp [i][j] = int(random(vi, vf));
    }
  }
  return temp;
}
