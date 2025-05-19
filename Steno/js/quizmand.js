document.addEventListener("DOMContentLoaded", () => {
    const questionBox = document.querySelector(".question-box");
    const answerContainer = document.querySelector(".answer-buttons");
  
    const quizData = [
      {
        question: "Mænd udgør ca. 70% af alle trafikdræbte i Danmark. Hvorfor tror du, det er sådan?",
        answers: [
          "De kører oftere bil",
          "De kører hurtigere og tager flere risici",
          "De bruger ikke sikkerhedsudstyr korrekt",
          "De bruger oftere deres telefon når de kører bil"
        ],
        correct: "De kører hurtigere og tager flere risici",
        feedback: "Mænd tager oftere chancer i trafikken – som at køre for hurtigt, overhale farligt eller køre spirituskørsel."
      },
      {
        question: "I hvor mange procent af dødsulykker i trafikken er mænd føreren?",
        answers: ["40%", "55%", "75%", "90%"],
        correct: "75%",
        feedback: "Ifølge Vejdirektoratets tal er mænd fører i omkring 75% af dødsulykker på vejene."
      },
      {
        question: "Hvad er sandsynligheden for at overleve en bilulykke, hvis du er mand sammenlignet med en kvinde i samme situation?",
        answers: [
          "Den samme",
          "Mænd har større overlevelseschance",
          "Kvinder har større overlevelseschance"
        ],
        correct: "Kvinder har større overlevelseschance",
        feedback: "Kvinder har større risiko for skader, bl.a. fordi bilens sikkerhedssystemer er optimeret til mandlige kroppe."
      },
      {
        question: "Hvilken type farlig trafikadfærd er mænd mest tilbøjelige til at udvise ifølge statistikker?",
        answers: [
          "Ikke bruge sikkerhedssele",
          "Køre uden kørekort",
          "Køre for hurtigt eller overhale farligt",
          "Køre med fejl på bilen"
        ],
        correct: "Køre for hurtigt eller overhale farligt",
        feedback: "Mænd er markant overrepræsenterede i ulykker med for høj fart og risikabel overhaling. Disse typer adfærd er blandt de største dødsårsager i trafikken."
      },
    ];
  
    let currentQuestion = 0;
  
    function loadQuestion(index) {
      const q = quizData[index];
      questionBox.textContent = q.question;
      questionBox.style.fontSize = "2.5rem";
      answerContainer.innerHTML = "";
  
      q.answers.forEach(answerText => {
        const btn = document.createElement("button");
        btn.textContent = answerText;
        btn.classList.add("answer");
        btn.addEventListener("click", () => handleAnswer(btn, q.correct, q.feedback));
        answerContainer.appendChild(btn);
      });
    }
  
    function handleAnswer(button, correctAnswer, feedbackText) {
      const allButtons = document.querySelectorAll(".answer");
      allButtons.forEach(b => b.disabled = true);
  
      if (button.textContent.trim() === correctAnswer.trim()) {
        button.style.backgroundColor = "#006b3c"; // grøn
      } else {
        button.style.backgroundColor = "#b31919"; // rød
      }
  
      setTimeout(() => {
        showFeedback(feedbackText);
      }, 800);
    }
  
    function showFeedback(feedbackText) {
      questionBox.textContent = feedbackText;
      questionBox.style.fontSize = "2rem";
      answerContainer.innerHTML = `<button class="next-button">Næste →</button>`;
  
      document.querySelector(".next-button").addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuestion(currentQuestion);
        } else {
          endQuiz();
        }
      });
    }
  
    function endQuiz() {
      questionBox.textContent = "Tak for at gennemføre quizzen!";
      questionBox.style.fontSize = "2.4rem";
      answerContainer.innerHTML = "";
    }
  
    // Start quizzen
    loadQuestion(currentQuestion);
  });
  