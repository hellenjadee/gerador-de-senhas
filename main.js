const quizQuestions = [
  {
    question: "1. O que é Inteligência Artificial?",
    answers: {
      a: "Um tipo de hardware com memória extra",
      b: "Tecnologia que permite que máquinas simulem a inteligência humana",
      c: "Uma linguagem de programação"
    },
    correctAnswer: "b"
  },
  {
    question: "2. Qual das opções é um exemplo de IA?",
    answers: {
      a: "Planilha Excel",
      b: "Assistente virtual como a Siri",
      c: "Calculadora comum"
    },
    correctAnswer: "b"
  },
  {
    question: "3. Qual linguagem é muito usada em IA?",
    answers: {
      a: "Python",
      b: "HTML",
      c: "CSS"
    },
    correctAnswer: "a"
  },
  {
    question: "4. Qual é uma aplicação da IA na saúde?",
    answers: {
      a: "Previsão de chuvas",
      b: "Reconhecimento de doenças por imagens",
      c: "Toque de campainha automática"
    },
    correctAnswer: "b"
  },
  {
    question: "5. IA é capaz de aprender com dados. Isso é chamado de:",
    answers: {
      a: "Programação estática",
      b: "Aprendizado de Máquina",
      c: "Design gráfico"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}) ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join("")}</div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = document.querySelectorAll(".answers");
  let numCorrect = 0;

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  document.getElementById("results").innerHTML = `Você acertou ${numCorrect} de ${quizQuestions.length} perguntas!`;
}

buildQuiz();

document.getElementById("submit").addEventListener("click", showResults);
