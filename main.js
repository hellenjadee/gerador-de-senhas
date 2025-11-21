// ====== TEMAS ======
const temas = [
  {
    id: 1,
    titulo: "Por que os procedimentos estéticos estão aumentando entre os jovens?",
    texto: `Conteúdo completo do tema 1...`
  },
  {
    id: 2,
    titulo: "Acessibilidade e inclusão de pessoas com deficiência no Brasil",
    texto: `Conteúdo completo do tema 2...`
  },
  { id: 3, titulo: "Principais fatores que influenciam na qualidade de vida e no bem-estar da população", texto: "" },
  { id: 4, titulo: "As mudanças climáticas no Brasil e seus desafios", texto: "" },
  { id: 5, titulo: "As consequências do descarte de lixo eletrônico", texto: "" },
  { id: 6, titulo: "O consumo de ultraprocessados e suas consequências à saúde", texto: "" },
  { id: 7, titulo: "Fatores e efeitos da dependência em jogos de apostas na web", texto: "" },
  { id: 8, titulo: "A importância do trabalho voluntário no combate às desigualdades sociais", texto: "" },
  { id: 9, titulo: "Adultização infantil – consequências da perda irreparável da infância", texto: "" },
  { id: 10, titulo: "Caminhos para combater o etarismo nas relações sociais", texto: "" },
  { id: 11, titulo: "A importância da educação financeira para os jovens", texto: "" },
  { id: 12, titulo: "Desafios para a valorização da cultura popular brasileira", texto: "" },
  { id: 13, titulo: "Caminhos para a universalização do saneamento básico no Brasil", texto: "" },
  { id: 14, titulo: "O papel do esporte como ferramenta de transformação social", texto: "" }
];

// ELEMENTOS
const lista = document.getElementById("temas-lista");
const detalhe = document.getElementById("tema-detalhe");
const titulo = document.getElementById("detalhe-titulo");
const texto = document.getElementById("detalhe-texto");
const voltarBtn = document.getElementById("btn-voltar");

// ====== GERAR LISTA ======
temas.forEach((t) => {
  const div = document.createElement("div");
  div.className = "tema";
  div.innerHTML = `<strong>${t.id}</strong> ${t.titulo}`;
  div.addEventListener("click", () => abrirTema(t));
  lista.appendChild(div);
});

// ====== ABRIR TEMA ======
function abrirTema(t) {
  document.querySelector(".container").style.display = "none";
  detalhe.style.display = "block";

  titulo.textContent = t.titulo;
  texto.innerHTML = t.texto
    ? t.texto.split("\n\n").map(p => `<p>${p}</p>`).join(""
