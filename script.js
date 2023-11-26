const quizData = [
    {
      question: "Who is first wildcard winner of BIGBOSS?",
      options: ["Elvish yadav", "Nora fatehi", "Aashika", "Orry"],
      correctAnswer: "Elvish yadav"
    },
    {
      question: "Which duo is most loved in BIGBOSS OTT2?",
      options: ["Abhisha", "Elvisha", "Abhiya", "Whoever is your favourite"],
      correctAnswer: "Abhisha"
    },
    {
      question: "Which two contestent make it to the BIGGBOSS OTT2 FINALE ?",
      options: ["Pooja Bhatt", "Manisha and Abhishek", "Abhishek and Jiya", "Elvish and Abhishek"],
      correctAnswer: "Elvish and Abhishek"
    },
    {
      question: "Who won BIGGBOSS SEASON 13?",
      options: ["Abhishek(FUKRA_INSAAN)", "Shidhhart shukla", "Manisha rani", "Elvish yadav"],
      correctAnswer: "Shidhhart shukla"
    },
    {
        question: "What Flower symbolises Friendship?",
        options: ["Lily","Yellow Rose","Lotus","Whatever your favourite"],
        correctAnswer:"Yellow Rose"
    }

];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizElement = document.getElementById('quiz');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const nextButton = document.getElementById('next-btn');
  
  function loadQuestion() {
    const questionData = quizData[currentQuestion];
    quizElement.innerHTML = questionData.question;
  
    const optionsHTML = questionData.options.map((option, index) => `
      <li>
        <input type="radio" name="option" value="${option}" id="option${index}">
        <label for="option${index}">${option}</label>
      </li>
    `).join('');
  
    optionsElement.innerHTML = optionsHTML;
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return false;
  
    return selectedOption.value === quizData[currentQuestion].correctAnswer;
  }
  
  function showResult() {
    const isCorrect = checkAnswer();
    if (isCorrect) {
      score++;
      resultElement.innerHTML = "Correct!";
    } else {
      resultElement.innerHTML = `Wrong! The correct answer was ${quizData[currentQuestion].correctAnswer}.                                                                       Better Luck Try Next Question :))
      `;
      
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }
  
  function showFinalResult() {
    quizElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.innerHTML = `Quiz Completed! Your Score: ${score} / ${quizData.length}`;
    scoreElement.innerHTML = `Score: ${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    quizElement.style.display = 'block';
    optionsElement.style.display = 'block';
    nextButton.style.display = 'block';
    resultElement.innerHTML = '';
    scoreElement.innerHTML = '';
  }
  
  loadQuestion();
  
  nextButton.addEventListener('click', showResult);
  