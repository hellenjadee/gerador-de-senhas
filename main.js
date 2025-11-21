// Temas fixos (referência para validação)
const TEMAS = [
  "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
  "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
  "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
  "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
  "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
  "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
  "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
  "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
  "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
  "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
  "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
  "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
  "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
  "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL"
];

const btnAdicionar = document.getElementById("btnAdicionar");
const modal = document.getElementById("modalRedacao");
const btnCancelar = document.getElementById("btnCancelar");
const formRedacao = document.getElementById("formRedacao");
const containerRedacoes = document.getElementById("redacoesContainer");

// Abre modal
btnAdicionar.addEventListener("click", () => {
  modal.hidden = false;
  formRedacao.reset();
  formRedacao.temaNumero.focus();
});

// Fecha modal
btnCancelar.addEventListener("click", () => {
  modal.hidden = true;
});

// Fecha modal se clicar fora do conteúdo
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.hidden = true;
  }
});

// Renderiza redação adicionada abaixo dos temas
function criarRedacaoElement(numero, texto) {
  const div = document.createElement("div");
  div.className = "redacao-item";

  const titulo = document.createElement("h3");
  titulo.className = "redacao-titulo";
  titulo.textContent = `Tema ${numero}: ${TEMAS[numero - 1] || "Tema desconhecido"}`;

  const textoP = document.createElement("p");
  textoP.textContent = texto;

  div.appendChild(titulo);
  div.appendChild(textoP);
  return div;
}

formRedacao.addEventListener("submit", (e) => {
  e.preventDefault();

  const numTema = Number(formRedacao.temaNumero.value);
  const texto = formRedacao.textoRedacao.value.trim();

  if (numTema < 1 || numTema > 14){
    alert("Digite um número válido de tema entre 1 e 14.");
    formRedacao.temaNumero.focus();
    return;
  }
  if (texto.length < 20){
    alert("Por favor, escreva uma redação com ao menos 20 caracteres.");
    formRedacao.textoRedacao.focus();
    return;
  }

  const novaRedacao = criarRedacaoElement(numTema, texto);

  // Insere em ordem (por número do tema)
  // Verifica se já existe redação do tema para substituir
  const existentes = containerRedacoes.querySelectorAll(".redacao-item");
  let substituido = false;
  existentes.forEach(item => {
    if(item.querySelector('h3').textContent.startsWith(`Tema ${numTema}:`)){
      containerRedacoes.replaceChild(novaRedacao, item);
      substituido = true;
    }
  });
  if(!substituido){
    containerRedacoes.appendChild(novaRedacao);
  }

  modal.hidden = true;
});