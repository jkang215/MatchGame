var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function () {
  var cardValues = MatchGame.generateCardValues;
  var $game = $('#game');
  MatchGame.renderCards(cardValues,$game)
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var values = [];
  for(i = 1; i <=8; i++) {
    values.push(i);
    values.push(i);
  }
  var randomValues = [];
  while(values.length != 0) {
    var randomIndex = Math.floor(Math.random() * values.length);
    randomValues.push(values[randomIndex]);
    values.splice(randomIndex, 1);
  }
  return randomValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.empty();
  var cardColors = ["hsl(25,85%,65%)",
                    "hsl(55,85%,65%)",
                    "hsl(90,85%,65%)",
                    "hsl(160,85%,65%)",
                    "hsl(220,85%,65%)",
                    "hsl(265,85%,65%)",
                    "hsl(310,85%,65%)",
                    "hsl(360,85%,65%)"];
  for(i = 0; i < cardValues.length; i++) {
    var $card = $('<div class="card col-xs-3"></div>');
    $card.data("value",cardValues[i]);
    $card.data("flipped", false);
    $card.data("color",cardColors[cardValues[i] - 1]);
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
