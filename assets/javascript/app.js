var triviaCounter;

$.prototype.trivia = function () {
    var thi = this;
    thi.playerChoice = null;
    thi.answers = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
    };
    thi.number = 30;
    thi.active = 0;
    thi.questions = [{
        question: "What did Harry Potter name his owl?",
        choices: ["Pigwidgeon", "Scabbers", "Hedwig", "Trevor"],
        correct: 2,
    }, {
        question: "Who killed Sirius Black?",
        choices: ["Voldemort", "Bellatrix", "Hermione", "Lupin"],
        correct: 1
    }, {
        question: "Who does Harry Potter help set free with a sock?",
        choices: ["Winky", "Kreacher", "BuckBeak", "Dobby"],
        correct: 3
    }, {
        question: "What type of Dragon did Harry fight druring the TriWizard Tournament?",
        choices: ["Hungarian Horntail", "Chinese Fireball", "Swedish Short-Snout", "Common Welsh Green"],
        correct: 0
    }, {
        question: "Who killed Albus Dumbledore?",
        choices: ["Snape", "Draco Malfoy", "Voldemort", "Grindlewald"],
        correct: 0
    }, {
        question: "What was the name of Gryffindor's head of house?",
        choices: ["Severus Snape", "Pomona Sprout", "Filius Flitwick", "Minerva McGonagall"],
        correct: 3
    }, {
        question: "What wizard board game did Ron Weasley play?",
        choices: ["Checkers", "Chess", "Clue", "Backgammon"],
        correct: 1
    }, {
        question: "Who first tells Harry Potter he's a Wizard?",
        choices: ["Vernon Dursley", "Dobby", "Hagrid", "Cho Chang"],
        correct: 2
    }, {
        question: "What is another name for Monkshood?",
        choices: ["Wormwood", "Wolfsbane", "Asphodel", "Bezoar"],
        correct: 1
    }, {
        question: "Who was the invented the Deluminator?",
        choices: ["Dumbledore", "Newt Scamander", "Hermione", "Arthur Weasley"],
        correct: 0
    }];

    thi.quiz = function () {
        if (thi.questions[thi.active]) {
            $("#timer").html("Time remaining: " + ":" + thi.number + " seconds");
            $("#questions1").html(thi.questions[thi.active].question);
            var choicesArr = thi.questions[thi.active].choices;

            for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button/>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#answers1').append(button);
            }
            triviaCounter = setInterval(thi.timer, 1000);

        } else {
            $("#container").append($('<div/>', {
                text: 'Unanswered: ' + (
                    thi.questions.length - (thi.answers.correct + thi.answers.incorrect)),
                class: 'result'
            }));
            $('#begin').text('Restart').appendTo("#container").show();
        }
    };

    thi.timer = function () {
        thi.number--;
        if (thi.number <= 0) {
            setTimeout(function () {
                thi.nextQuestion();
                thi.answers.unanswered++;
            });

        } else {
            $("#timer").html("Time remaining: " + "00:" + thi.number + " seconds");
        }
    };

    thi.nextQuestion = function () {
        thi.active++;
        clearInterval(triviaCounter);
        thi.number = 30;
        $('#timer').html("");
        setTimeout(function () {
            thi.update();
            thi.quiz();
        }, 2000)
    };
    thi.update = function () {
        $('div[id!="container"]').each(function() {
            $(this).html('');
        });
        $('.correct').html('Correct Answers: ' + thi.answers.correct);
        $('.incorrect').html('Incorrect Answers: ' + thi.answers.incorrect);
        $(".unanswered").html("Unanswered Questions: " + thi.answers.unanswered);
    };
    thi.answer = function (correct) {
        var string = correct ? 'correct' : 'incorrect';
        thi.answers[string]++;
        $('.' + string).html(string + ' answers: ' + thi.answers[string]);
    };
    return thi;
};
var Trivia;

$("#begin").click(function () {
    $(this).hide();
    $('.result').remove();
    $('.correct,.incorrect,.unanswered').html('');
    count = -1;
    Trivia = new $(window).trivia();
    Trivia.quiz();
});
var gifs = ['assets/images/pincers.gif', 'assets/images/bellatrix1.gif', 'assets/images/dobby.gif', 'assets/images/sirius.gif', 'assets/images/shrug.gif', 'assets/images/clapping.gif', 'assets/images/ron.gif', 'assets/images/hagrid.gif', 'assets/images/obviously.gif', 'assets/images/dumblin.gif'];
var count = -1;

$('#answers1').on('click', 'button', function () {
    var playerChoice = $(this).data("id"),
        thi = Trivia || $(window).trivia(),
        index = thi.questions[thi.active].correct,
        correct = thi.questions[thi.active].choices[index];
        count++;

    if (playerChoice !== index) {
        $('#answers1').text("Incorrect, how disappointing. The correct answer is: " + correct);
        thi.answer(false);
        $("#images1").html("<img src='assets/images/wrong.gif' width='200px'>");
    } else {
        $('#answers1').text("Correct!: " + correct);
        thi.answer(true);
        $("#images1").html("<img src=" + gifs[count] + " width='200px'>");
    }
    thi.nextQuestion();

}); 