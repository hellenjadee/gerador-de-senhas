const questions = [
  {
    question: "1. Você se sente confortável em conversar com assistentes virtuais como a Alexa, Siri ou ChatGPT?",
    answers: ["Sim, acho prático", "Mais ou menos", "Não gosto muito", "Nunca usei"]
  },
  {
    question: "2. Você teria um carro autônomo (que dirige sozinho)?",
    answers: ["Sim, seria incrível!", "Talvez, com cautela", "Prefiro dirigir", "Nunca confiaria"]
  },
  {
    question: "3. A IA deveria ser usada para tomar decisões médicas importantes?",
    answers: ["Sim, se for confiável", "Só com supervisão humana", "Não", "Não tenho certeza"]
  },
  {
    question: "4. Você acha que a IA pode substituir seu trabalho no futuro?",
    answers: ["Sim, estou preocupado", "Talvez uma parte", "Não, meu trabalho é humano demais", "Não pensei sobre isso"]
  },
  {
    question: "5. Se pudesse criar uma IA para te ajudar no dia a dia, o que ela faria?",
    answers: ["Organizar minha rotina", "Ajudar nos estudos/trabalho", "Fazer tarefas domésticas", "Conversar e me dar conselhos"]
  }
];

let currentQuestion = 0;
const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function showQuestion(index) {
  const q = questions[index];
  questionContainer.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach(answer => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = answer;
    label.appendChild(input);
    label.append(" " + answer);
    answersContainer.appendChild(label);
  });
}

nextButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    document.getElementById("quiz").style.display = "none";
    resultContainer.style.display = "block";
  }
});

showQuestion(currentQuestion);
