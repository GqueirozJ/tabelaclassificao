//  com esta estrutura, podemos atribuir varias variaves a um objeto
//                              chave.:valor
var gabriel = {
  nome: "Gabriel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var miguel = {
  nome: "Miguel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

// Quando fazemos a "function", estamos só criando a função
//e não chamando a função para compilar
function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
// aqui a função foi chamada e será executada, neste caso calculou os pontos do Gabriel. E o resultado ficara alocado na variavel.
//var resultadoDosPontos = calcularPontos(gabriel);
//console.log(resultadoDosPontos);
// lista = array

gabriel.pontos = calcularPontos(gabriel);
miguel.pontos = calcularPontos(miguel);
//

// lista de jogadores
var lJogadores = [gabriel, miguel];

function exibirJogadoresNaTela(lJogadores) {
  var elementosDosJogadores = "";
  // A instrução for cria um loop, neste caso na lista de jogadores, e esta fazendo uma contagem de jogadores, do tamanho da lista até zerar
  for (var i = 0; i < lJogadores.length; i++) {
    elementosDosJogadores += "<tr><td>" + lJogadores[i].nome + "</td>";
    elementosDosJogadores += "<td>" + lJogadores[i].vitorias + "</td>";
    elementosDosJogadores += "<td>" + lJogadores[i].empates + "</td>";
    elementosDosJogadores += "<td>" + lJogadores[i].derrotas + "</td>";
    elementosDosJogadores += "<td>" + lJogadores[i].pontos + "</td>";
    elementosDosJogadores +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elementosDosJogadores +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elementosDosJogadores +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elementosDosJogadores += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elementosDosJogadores;
  console.log = elementosDosJogadores;
}
exibirJogadoresNaTela(lJogadores);

function adicionarVitoria(i) {
  var jogador = lJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(lJogadores);
}
function adicionarEmpate(i) {
  var jogador = lJogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(lJogadores);
}
function adicionarDerrota(i) {
  var jogador = lJogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(lJogadores);
}
