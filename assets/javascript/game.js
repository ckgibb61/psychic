$(document).ready(function (){
console.log("ready")
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var guesses = 9;
    var wins = 0;
    var losses = 0;
    var guessesSoFar = [];
    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    
    var reset = computerChoices-computerGuess;
    console.log(reset)

    (document.onkeyup = function(event) {
        var userGuess = event.key;
    console.log(computerGuess.indexOf(userGuess))
    guessesSoFar.push(userGuess);

        if (userGuess === computerGuess ){
        alert("You psychic, you! Buy a lottery ticket.");
        wins++;
        $(".ww").text(wins);
        

        // return computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        else {
            guesses--;
            $(".count").text(guesses);
            $(".letters").text(guessesSoFar);
            
        }

        if (guesses === 0) {
            alert("Terrible guesses, don't take up gambling.");
            losses++;
            $(".ll").text(losses);
        }

        var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses so Far: " +  guessesSoFar.join(' ,');

        // document.querySelector("#game").innerHTML = html;
    })();
   
    

});