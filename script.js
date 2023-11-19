const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  
  function displayQuiz() {
    questions.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.className = "question";
      questionElement.innerHTML = `
        <p>${index + 1}. ${question.question}</p>
        ${question.options.map((option, i) => <input type="radio" name="q${index}" value="${option}" id="q${index}o${i}"><label for="q${index}o${i}">${option}</label><br>).join('')}
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(input[name="q${index}"]:checked);
      if (selectedOption) {
        if (selectedOption.value === question.correctAnswer) {
          score++;
        }
      }
    });
  
    alert(Your score: ${score} out of ${questions.length});
  }
  
  displayQuiz();