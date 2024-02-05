///tenha o arquivo style.css e veja o console.
var agenda;
function setup() {
  createCanvas(500, 500)
  contato = createButton("Liste os contatos")
  contato.position(150, 75)
  contato.mousePressed(listarContatos)

  adicina = createButton("Adicinar contatos")
  adicina.position(150, 175)
  adicina.mousePressed(adicionarContato)

  remover = createButton("Remover Contato")
  remover.position(150, 275)
  remover.mousePressed(removercontato)

  busca = createButton("Buscar Contato")
  busca.position(150, 375)
  busca.mousePressed(buscarContato)

  agenda = [
    ["davi", 85978457845, "davi@gmail.com"],
    ["gabriel", 85974523671, "gabriel@gmail.com"],
    ["paulo", 85957941385, "paulo@gmail.com"],
    ["ana", 85976347845, "ana@gmail.com"],
    ["maria", 85978967875, "maria@gmail.com"]
  ]

}

function draw() {
  background(255);
}

function listarContatos() {
  for (let indice in agenda) {
    console.log(`${agenda[indice][0]}, ${agenda[indice][1]}, ${agenda[indice][2]}`)
  }
}

function adicionarContato() {
  let nome = prompt("Digite o nome:")
  let numero = parseInt(prompt("Adicine o numero com DDD:"))
  let email = prompt("Adicine o email:")

  if (nome != "" && numero != "" && email != "") {
    agenda.push([nome, numero, email])
  }
  else { print("Dados incompletos, tente novamente, por favor!") }
}

function removercontato() {
  let removi = prompt("Digite o nome do contato a ser removido:")

  for (let i = 0; i < agenda.length; i++) {
    let remov = agenda[i].indexOf(removi)
    if (remov != -1) {
      agenda.splice(i, 1)
    }
  }
}

function buscarContato() {
  let busque = prompt("Digite o nome do contato para a busca")
  let remob
  let achou = false
  for (let i = 0; i < agenda.length; i++) {
    remob = agenda[i].indexOf(busque.toLowerCase())
    if (remob != -1) {
      //tira = remob;
      achou = true
      console.log(agenda[i][0])
      console.log(agenda[i][1])
      console.log(agenda[i][2])
      break
    }
  }
  if (!achou) {
    print(`Contato "${busque}" não encontrado, tenha certeza que digitou corretamente e tente novamente!`)
  }
}
