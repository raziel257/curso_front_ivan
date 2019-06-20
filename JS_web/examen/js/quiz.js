// 1

var questions = [
    [
      "¿En qué lugar de la tierra nació el capitán J.T. Kirk ?",
      "Ohaio",
      "Iowa",
      "Barcelona",
      "Corea del Norte",
      1
    ],
    [
      "¿Cuál es el significado de sus iniciales J. T.?",
      "James Tiberius",
      "John Thomas",
      "Las 2 anteriores",
      "Joan Tarrés",
      0
    ],
    [
      "¿Cuál fue la primera nave en la que sirvió y su grado?",
      "Teniente de la USS Farragut",
      "Cabo en la USS Enterprise",
      "Vigia en la USS Independence",
      "Alférez en la USS Republic",
      3
    ],
    [
      "¿Qué grado máximo alcanzo?",
      "Capitán",
      "Teniente",
      "Almirante",
      "Ninguno de los anteriores",
      2
    ],
    [
      "¿Cómo se llamaba su hijo?",
      "Mark Zuckerberg",
      "Bill Gates",
      "David",
      "Rasmus Lerdorf",
      2
    ],
    [
      "¿Qué actores han interpretado a este personaje?",
      "Mark Zuckerberg y Bill Gates ",
      "Fernando Esteso y Andres Pajares",
      "Bud Spencer y Terence Hill",
      "William Shatner y Chris Pine",
      
      3
      
    ],
    [
      "¿En qué año se graduo en la flota estelar?",
      "1977",
      "2254",
      "3521",
      "Nunca se graduo",
      1
    ],
    [
      "¿Quién fue su nemesis?",
      "Donald Trump",
      "Spock",
      "J. M. Aznar",
      "Khan Noonieng Singh",
      3
    ],
    [
      "¿En qué planeta descansan sus restos?",
      "Nexus",
      "La tierra",
      "Marte",
      "¡Es inmortal!",
      0
    ],
    [
      "¿En qué película el y su equipo viajan en el tiempo?",
      "El tiempo en sus manos",
      "Regreso al futuro",
      "Primer contacto",
      "Mision salvar la tierra",
      3
    ],
  
  ];
  // 2
  var questionTemplate = _.template(" \
  <div class='card question'><span class='question'><%= question %></span> \
  <ul class='options'> \
  <li> \
  <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
  <label for='q<%= index %>o1'><%= a %></label> \
  </li> \
  <li> \
  <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
  <label for='q<%= index %>o2'><%= b %></label> \
  </li> \
  <li> \
  <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
  <label for='q<%= index %>o3'><%= c %></label> \
  </li> \
  <li> \
  <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
  <label for='q<%= index %>o4'><%= d %></label> \
  </li> \
  </ul> \
  </div> \
  ");
  
  // 3
  var points,
    pointsPerQuestion,
    currentQuestion,
    questionTimer,
    timeForQuestion = 10, // seconds
    timeLeftForQuestion;
  // 4
  $(function() {
    // 5
    $('button.start').click(start);
    $('.play_again button').click(restart);
  
    // 6
    function restart() {
      points = 0;
      pointsPerQuestion = 20;
      currentQuestion = 0;
      timeLeftForQuestion = timeForQuestion;
      // 7
      $('.finish.card').hide();
      $('div.start').show();
      $('.times_up').hide();
  
      generateCards();
      updateTime();
      updatePoints();
    }
  
    // 8
    function start() {
      $('div.start').fadeOut(200, function() {
        moveToNextQuestion();
      });
    }
  
    // 9
    function generateCards() {
      $('.questions').html('');
      for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var html = questionTemplate({
          question: q[0],
          index: i,
          a: q[1],
          b: q[2],
          c: q[3],
          d: q[4],
          
        });
        $('.questions').append(html);
      };
  
      // 10
      $('.question.card input').change(optionSelected);
    }
  
    // 11
    function moveToNextQuestion() {
      currentQuestion += 1;
      if (currentQuestion > 1) {
        $('.question.card:nth-child(' + (currentQuestion - 1) + ')').hide();
      }
  
      // 12
      showQuestionCardAtIndex(currentQuestion);
      setupQuestionTimer();
    }
  
    // 13
    function setupQuestionTimer() {
      if (currentQuestion > 1) {
        clearTimeout(questionTimer);
      }
      timeLeftForQuestion = timeForQuestion;
      // 14
      questionTimer = setTimeout(countdownTick, 1000);
    }
  
    // 15
    function showQuestionCardAtIndex(index) { // staring at 1
      var $card = $('.question.card:nth-child(' + index + ')').show();
    }
  
    // 16
    function countdownTick() {
      timeLeftForQuestion -= 1;
      updateTime();
      if (timeLeftForQuestion == 0) {
        return finish();
      }
      questionTimer = setTimeout(countdownTick, 1000);
    }
  
    // 17
    function updateTime() {
      $('.countdown .time_left').html(timeLeftForQuestion + 's');
    }
  
    // 18
    function updatePoints() {
      $('.points span.points').html(points + ' puntos');
    }
  
    // 19
    function optionSelected() {
      var selected = parseInt(this.value);
      var correct = questions[currentQuestion - 1][5];
  
      if (selected == correct) {
        points += pointsPerQuestion;
        updatePoints();
        correctAnimation();
      } else {
        wrongAnimation();
      }
  
      if (currentQuestion == questions.length) {
        clearTimeout(questionTimer);
        return finish();
      }
      moveToNextQuestion();
    }
  
    // 20
    function correctAnimation() {
      animatePoints('right');
    }
  
    // 21
    function wrongAnimation() {
      animatePoints('wrong');
    }
  
    // 22
    function animatePoints(cls) {
      $('header .points').addClass('animate ' + cls);
      setTimeout(function() {
        $('header .points').removeClass('animate ' + cls);
      }, 500);
    }
  
    // 23
    function finish() {
      if (timeLeftForQuestion == 0) {
        $('.times_up').show();
      }
      $('p.final_points').html(points + ' puntos');
      $('.question.card:visible').hide();
      $('.finish.card').show();
    }
  
    // 24
    restart();
  });