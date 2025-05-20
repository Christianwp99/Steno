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
    }
  ];

  let currentQuestion = 0;

  function loadQuestion(index) {
    const q = quizData[index];
    questionBox.textContent = q.question;
    questionBox.style.fontSize = "2rem";
    answerContainer.innerHTML = "";
    questionBox.style.height = "10rem";   // Gør højden standard
    

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
    // Opdaterer tekstindholdet i spørgsmålskassen med feedback
    questionBox.textContent = feedbackText;
    questionBox.style.fontSize = "2.4rem"; // Gør teksten større
    questionBox.style.height = "30rem";   // Gør højden større (vælg en passende værdi)
  
    // Erstatter svarcontainerens indhold med en ny 'næste'-knap
    answerContainer.innerHTML = `<button class="next-button"></button>`;
  
    // Vælger den netop indsatte knap og bilen
    const nextButton = document.querySelector(".next-button");
    const bil = document.querySelector(".bil");
  
    // Funktion der beregner og opdaterer bilens position ud fra fremdrift i quizzen
    function updateBilPosition() {
      const procent = (currentQuestion / (quizData.length - 1)) * 75; // Procentvis fremdrift
      bil.style.left = `${procent}%`; // Flytter bilen til ny position
    }
  
    // Hvis vi er ved det sidste spørgsmål
    if (currentQuestion === quizData.length - 1) {
      nextButton.textContent = "Færdig"; // Skift knaptekst
      nextButton.style.position = "relative";
      nextButton.style.top = "-10rem";    // Flytter knappen op
      nextButton.style.left = "37rem";    // Flytter knappen til højre
      nextButton.style.color = "white"; // hvid farve
      nextButton.addEventListener("click", () => {
        // Naviger til slutside
        window.location.href = "quizslut.html";
      });
    } else {
      // Hvis der stadig er flere spørgsmål tilbage
      nextButton.textContent = "Næste →"; // Skift knaptekst
      nextButton.style.position = "relative";
      nextButton.style.top = "-10rem";    // Flytter knappen op
      nextButton.style.left = "37rem";    // Flytter knappen til højre
      nextButton.style.color = "white"; // hvid farve
      nextButton.addEventListener("click", () => {
        currentQuestion++; // Gå videre til næste spørgsmål
        loadQuestion(currentQuestion); // Indlæs næste spørgsmål
        updateBilPosition(); // Opdater bilens position
      });
    }
  }
  

  loadQuestion(currentQuestion);
});

// Tilbage til loopskærm
let inactivityTime = function () {
    let time;
    let timeoutInSeconds = 30;

    // Funktion der omdirigerer til index.html
    function redirectToLoopScreen() {
      window.location.href = "index.html";
    }

    // Nulstil timeren ved interaktion
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(redirectToLoopScreen, timeoutInSeconds * 1000);
    }

    // Lyt efter brugerinteraktion
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
  };

  inactivityTime(); // Kør funktionen