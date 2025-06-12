const tamanhoTexto = document.querySelector(".legenda-texto");
let tamanhoLegenda = 16;

const botoes = document.querySelectorAll(".legenda-botao");

botoes[0].onclick = diminuirLegenda;
botoes[1].onclick = aumentarLegenda;

function diminuirLegenda() {
  if (tamanhoLegenda > 10) {
    tamanhoLegenda--;
    atualizarLegenda();
  }
}

function aumentarLegenda() {
  if (tamanhoLegenda < 30) {
    tamanhoLegenda++;
    atualizarLegenda();
  }
}

function atualizarLegenda() {
  tamanhoTexto.style.fontSize = `${tamanhoLegenda}px`;
}
