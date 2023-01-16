// Questions and answers
var questions = [
  {
    question: "Quel est le nom de l'entraîneur de l'équipe de France de football qui a remporté la Coupe du monde en 2018?",
    answers: {
      a: "Didier Deschamps",
      b: "Pep Guardiola",
      c: "Jürgen Klopp"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel joueur a remporté le Ballon d'Or en 2018?",
    answers: {
      a: "Cristiano Ronaldo",
      b: "Lionel Messi",
      c: "Luka Modric"
    },
    correctAnswer: "c"
  },
  {
    question: "Quelle équipe a remporté la Ligue des champions de l'UEFA en 2020?",
    answers: {
      a: "Paris Saint-Germain",
      b: "Bayern Munich",
      c: "Real Madrid"
    },
    correctAnswer: "b"
  }
];

// Code to display questions and answers
var quiz = document.getElementById("quiz");
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];
  var questionTitle = document.createElement("p");
  questionTitle.innerHTML = question.question;
  quiz.appendChild(questionTitle);
  for (var letter in question.answers) {
    var answer = question.answers[letter];
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "question" + (i + 1);
    radio.value = letter;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(answer));
    quiz.appendChild(label);
  }
}

// Code to check answers
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function() {
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    var radios = document.getElementsByName("question" + (i + 1));
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked && radios[j].value === question.correctAnswer) {
        score++;
      }
    }
  }
  var result = document.getElementById("result");
  result.innerHTML = "Vous avez obtenu " + score + " sur " + questions.length + ".";
});
