document.addEventListener("DOMContentLoaded", () => {
  const questionBox = document.querySelector(".question-box");
  const answerContainer = document.querySelector(".answer-buttons");

  const quizData = [
    {
      question: "Findes der både crash-test dummies, som er designet efter mænd og efter kvinder?",
      answers: ["Ja", "Nej"],
      correct: "Nej",
      feedback: "De fleste crashtestdummies er stadig modelleret efter en gennemsnitlig mand, hvilket giver skæv sikkerhedsvurdering."
    },
    {
      question: "Har kvinder større risiko for skader i samme type ulykke som mænd?",
      answers: ["Ja, kvinder har større risiko", "Nej, kvinder er mere sikre", "Det afhænger af bilen"],
      correct: "Ja, kvinder har større risiko",
      feedback: "Studier viser, at kvinder har 47% større risiko for alvorlige skader i bilulykker, især frontalsammenstød."
    },
    {
      question: "Er sikkerhedsseler i biler designet, så de passer optimalt til kvinders kroppe?",
      answers: ["Ja, de er tilpasset alle kropstyper", "Det afhænger af bilens størrelse", "Nej, de er primært designet ud fra mandlige mål"],
      correct: "Nej, de er primært designet ud fra mandlige mål",
      feedback: "Sikkerhedsseler er oftest konstrueret ud fra mandens anatomi og siddeposition. Det kan give dårlig pasform for kvinder – især over brystet, ved hofterne og under graviditet."
    },
    {
      question: "Betyder det noget for sikkerheden, at kvinder i gennemsnit vejer mindre end mænd?",
      answers: ["Nej, bilen beskytter alle lige godt", "Det handler mest om hastighed", "Ja, lavere vægt øger risikoen ved sammenstød"],
      correct: "Ja, lavere vægt øger risikoen ved sammenstød",
      feedback: "Lavere kropsvægt gør kroppen mere sårbar ved kollisioner – især når sikkerhedsudstyr ikke er tilpasset kvinders fysik. Det er en medvirkende årsag til, at kvinder har større risiko for alvorlige skader."
    }
  ];

  let currentQuestion = 0;

  function loadQuestion(index) {
    const q = quizData[index];
    questionBox.textContent = q.question;
    questionBox.style.fontSize = "3rem";
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
    }, 1000);
  }

  function showFeedback(feedbackText) {
    questionBox.textContent = feedbackText;
    questionBox.style.fontSize = "2.4rem";
    answerContainer.innerHTML = `<button class="next-button"></button>`;

    const nextButton = document.querySelector(".next-button");

    if (currentQuestion === quizData.length - 1) {
      nextButton.textContent = "Færdig";
      nextButton.addEventListener("click", () => {
        window.location.href = "quizslut.html";
      });
    } else {
      nextButton.textContent = "Næste →";
      nextButton.addEventListener("click", () => {
        currentQuestion++;
        loadQuestion(currentQuestion);
      });
    }
  }

  loadQuestion(currentQuestion);
});
