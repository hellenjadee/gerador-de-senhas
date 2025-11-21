// ---------------------------------------------------------
// TEMAS (direto no main.js)
// ---------------------------------------------------------
const themes = [
  {
    id: 1,
    title: "Por que os procedimentos estéticos estão aumentando entre os jovens?",
    content: `Crescente uso de Procedimentos estéticos por jovens

Nos últimos anos os procedimentos estéticos entre os jovens vêm aumentando cada vez mais...
    
Além disso, a faixa etária dos jovens que buscam por essas mudanças é de 18 a 25 anos...

Outro ponto é o quão facilitado é encontrar clínicas e preços competitivos...`
  },
  {
    id: 2,
    title: "Acessibilidade e inclusão de pessoas com deficiência no Brasil",
    content: `A acessibilidade e a inclusão de pessoas com deficiência no Brasil representam um desafio contínuo...

Entretanto, a realidade mostra que ainda faltam investimentos...`
  },

  { id: 3, title: "Principais fatores que influenciam na qualidade de vida", content: "" },
  { id: 4, title: "As mudanças climáticas no Brasil e seus desafios", content: "" },
  { id: 5, title: "As consequências do descarte de lixo eletrônico", content: "" },
  { id: 6, title: "O consumo de ultraprocessados e suas consequências", content: "" },
  { id: 7, title: "Dependência em jogos de apostas na web", content: "" },
  { id: 8, title: "A importância do trabalho voluntário", content: "" },
  { id: 9, title: "Adultização infantil", content: "" },
  { id: 10, title: "Caminhos para combater o etarismo", content: "" },
  { id: 11, title: "Educação financeira para os jovens", content: "" },
  { id: 12, title: "Desafios da cultura popular brasileira", content: "" },
  { id: 13, title: "Caminhos para o saneamento básico", content: "" },
  { id: 14, title: "O esporte como ferramenta de transformação social", content: "" }
];


// ---------------------------------------------------------
// ELEMENTOS
// ---------------------------------------------------------
const listEl = document.getElementById("themes-list");
const detailEl = document.getElementById("theme-detail");

const backBtn = document.getElementById("back-btn");
const themeNumberEl = document.getElementById("theme-number");
const themeTitleEl = document.getElementById("theme-title");
const themeContentEl = document.getElementById("theme-content");


// ---------------------------------------------------------
// LISTAR TEMAS
// ---------------------------------------------------------
themes.forEach((t, index) => {
  const card = document.createElement("div");
  card.className = "theme-card";

  card.innerHTML = `
    <div class="theme-card-number">${index + 1}</div>
    <div class="theme-card-title">${t.title}</div>
  `;

  card.addEventListener("click", () => openTheme(t));
  listEl.appendChild(card);
});


// ---------------------------------------------------------
// ABRIR DETALHE
// ---------------------------------------------------------
function openTheme(theme) {
  listEl.classList.add("hidden");
  detailEl.classList.remove("hidden");

  themeNumberEl.textContent = theme.id;
  themeTitleEl.textContent = theme.title;

  if (theme.content) {
    const paragraphs = theme.content
      .split("\n\n")
      .map(p => `<p>${p}</p>`)
      .join("");

    themeContentEl.innerHTML = paragraphs;
  } else {
    themeContentEl.innerHTML = `<p><i>Conteúdo em breve...</i></p>`;
  }
}


// ---------------------------------------------------------
// VOLTAR
// ---------------------------------------------------------
backBtn.addEventListener("click", () => {
  listEl.classList.remove("hidden");
  detailEl.classList.add("hidden");
});
