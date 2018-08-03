
$(document).ready(function(){
    
    var correct = 0;
    var incorrect = 0;
    var finishGame = true;

    var questions = ({

        q: "What did Harry Potter name his owl?",
        a: ("Pigwidgeon", "Scabbers", "Hedwig", "Trevor"),
        correct: 3,
    }, {
        q: "Who killed Sirius Black?",
        a: ("Voldemort", "Bellatrix", "Hermione", "Lupin"),
        correct: 2,
    }, {
        q: "Who does Harry Potter help set free with a sock?",
        a: ("Winky", "Kreacher", "BuckBeak", "Dobby"),
        correct: 4,
    }, { 
        q: "What type of Dragon did Harry fight druring the TriWizard Tournament?",
        a: ("Hungarian Horntail", "Chinese Fireball", "Swedish Short-Snout", "Common Welsh Green"),
        correct: 1,
    }, {
        q: "Who killed Albus Dumbledore?",
        a: ("Snape", "Draco Malfoy", "Voldemort", "Grindlewald"),
        correct: 1,
    }, {
        q: "What was the name of Gryffindor's head of house?",
        a: ("Severus Snape", "Pomona Sprout", "Filius Flitwick", "Minerva McGonagall"),
        correct: 4,
    }, {
        q: "What wizard board game did Ron Weasley play?",
        a: ("Checkers", "Chess", "Clue", "Backgammon"),
        correct: 2,
    }, {
        q: "Who first tells Harry Potter he's a Wizard?",
        a: ("Vernon Dursley", "Dobby", "Hagrid", "Cho Chang"),
        correct: 3,
    }, {
        q: "What is another name for Monkshood?",
        a: ("Wormwood", "Wolfsbane", "Asphodel", "Bezoar"),
        correct: 2,
    }, {
        q: "Who was the invented the Deluminator?",
        a: ("Dumbledore", "Newt Scamander", "Hermione", "Arthur Weasley"),
  
    });

    function start() {
        correct = 0;
        incorrect = 0;
    }

    
});