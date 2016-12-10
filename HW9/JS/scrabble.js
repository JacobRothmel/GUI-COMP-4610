/**
 * File: /usr/cs/undergrad/2016/jrothmel/public_html/hw9/js/scrabble.js
 * Student in: 91.61 GUI Programming I
 * Jacob Rothmel jacob_rothmel@student.uml.edu
 * edited on: 11/29/16
 * Used W3Schools and lots and lots of google.
 * got some help from my friend Alex also.
 **/
var totalscore = 0;
var lettersOnDeck = 0;
var images = "";
var word = new Array(8); 
var tCount = 0;

var scores = [
    {"letter":"A", "value":1, "amount":9},
    {"letter":"B", "value":3, "amount":2},
    {"letter":"C", "value":3, "amount":2},
    {"letter":"D", "value":2, "amount":4},
    {"letter":"E", "value":1, "amount":12},
    {"letter":"F", "value":4, "amount":2},
    {"letter":"G", "value":2, "amount":3},
    {"letter":"H", "value":4, "amount":2},
    {"letter":"I", "value":1, "amount":9},
    {"letter":"J", "value":8, "amount":1},
    {"letter":"K", "value":5, "amount":1},
    {"letter":"L", "value":1, "amount":4},
    {"letter":"M", "value":3, "amount":2},
    {"letter":"N", "value":1, "amount":5},
    {"letter":"O", "value":1, "amount":8},
    {"letter":"P", "value":3, "amount":2},
    {"letter":"Q", "value":10, "amount":1},
    {"letter":"R", "value":1, "amount":6},
    {"letter":"S", "value":1, "amount":4},
    {"letter":"T", "value":1, "amount":6},
    {"letter":"U", "value":1, "amount":4},
    {"letter":"V", "value":4, "amount":2},
    {"letter":"W", "value":4, "amount":2},
    {"letter":"X", "value":8, "amount":1},
    {"letter":"Y", "value":4, "amount":2},
    {"letter":"Z", "value":10, "amount":1}
] 

$(document).ready(function() {
    buildBoard(); 
    JQueryDragDrop(); 
});

//randomly pick tiles to add to board
function buildBoard()
{
    var letter;
    var random;
    var lettersToAdd  = 7 - lettersOnDeck;

    for(var i = 0; i < lettersToAdd; i++)
    {
        random = Math.floor((Math.random() * 25));      
        letter = scores[random].letter;                 
        $("#rack").append(" <img id=\""+ letter + "\" class=\"rack_blocks\" src=\"images/Scrabble_Tile_" + letter + ".jpg\">") 
        lettersOnDeck++;
    }
    lockWord();
    console.log(images);

    JQueryDragDrop(); //refresh the draggable code
}
 //allow the tiles to be dropped back on the rack
function JQueryDragDrop(){
   
    $("#rack").droppable({ accept: '.rack_blocks', out:Letters});
    function Letters(event, ui){
        lettersOnDeck--;
    }

    $( ".rack_blocks" ).draggable({ snap: ".board_blocks", snapMode: "inner", revert: 'invalid'/*, drag:reset*/ });

    function Drag (event, ui) {
        if(ui.draggable.attr("id") == word[$(this).attr("id")]) {
            word[$(this).attr("id")] = ""; 
            tCount--;
            updateWord(word);
        }
    }

    $(".board_blocks").droppable({ accept: '.rack_blocks', drop: Drop, out:Drag });

    //run this function when a tile is dropped
    function Drop(event, ui){
        var letter =  ui.draggable.prop('id');
        var element =  $(this).attr("id");          
        var number = parseInt(element); 

        if(typeof word[number-1] === 'undefined' && typeof word[number+1] === 'undefined' && tCount!= 0)
        {
            document.getElementById('word').innerHTML = "YOUR WORD MUST BE ONE STRING WITH NO SPACES";
        }else{
            tCount++;
            word[number] = letter;
            updateWord(word);
        }
    }
}

//dragability locking.
function lockWord(){
	var object ="";
	//go through the entire word
	for(var i = 0; i <= word.length; i++)
	{
		if(typeof word[i] === 'undefined')
		{
		}else{
			$("#" + word[i]).draggable( 'disable' )
		}
	}
}

function updateScore(word) {
    var total_score = 0;
    var scoreToAdd = 0;
    var doubleWord = 0;
	
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < scores.length; j++) {
            if (word[i] != "" && (word[i] == scores[j].letter)) {
                if (i == 2) {
                    scoreToAdd = scores[j].value * 2;
                    total_score += scoreToAdd;
                }if (i == 5) {
                    doubleWord++;
                    scoreToAdd = scores[j].value;
                    total_score += scoreToAdd;
                }if(i!=2 && i!=5) 
                {
                   total_score += scores[j].value
                }
            }
        }
    }
    if(doubleWord!=0)
    {
        total_score = total_score * 2;
    }

    document.getElementById('score').innerHTML = total_score.toString();
}

//search for a word
function updateWord(did){
    var word = "";
    for(var i=0; i<did.length; i++){
        if(typeof did[i] === 'undefined')
        {

        }else{
            word+=did[i];
        }
    }
    if(word)
    {
        document.getElementById('word').innerHTML = word;
        updateScore(word);
        submitWord();
    }
}

// dictionary lookup object
var dict = {};

// Do a jQuery Ajax request for the text dictionary
$.get( "dictionary/dictionary.txt", function( txt ) {
    var words = txt.split( "\n" );

    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;

    }
});

//submitting function
function submitWord(){
    var cLable= word+" GOOD WORD!"
    var label = word + " INVALID WORD!";
    findWord();
    var tosub = document.getElementById('word').innerHTML;
    console.log("submitted word: " + tosub);
    tosub = tosub.toLowerCase();
    if ( dict[tosub] ) {
        document.getElementById('word').innerHTML = "GOOD WORD!";
    }else{
        document.getElementById('word').innerHTML = "INVALID WORD: " + tosub;
    }
}
// Modified to only pass in one word, which can then be verified.
function findWord( word ) {
    if ( dict[ word ] )
        return word;
    return "_____";
}

//new tiles for hand
function newTiles()
{
    if(document.getElementById('word').innerHTML === "GOOD WORD!")
    {
        totalscore += parseInt(document.getElementById('score').innerHTML);
        document.getElementById('total_score').innerHTML = "Total score: " + totalscore;
        reset();
    }else{
        alert("Submit a valid word!");
    }
}

//refreshes the page to reset tiles and board
function refreshPage(){
    window.location.reload();
}

/**
 * refresh the hand and the board and the messages
 */
function reset()
{
    var letter;
    var random;
    var lettersToAdd  = 7;
    var string ="";

    lettersOnDeck = 7;

    for(var i =0; i<word.length;i++)
    {
        word[i]="";
    }

    for(var i = 0; i < 7; i++)
    {
        random = Math.floor((Math.random() * 25));
        letter = scores[random].letter;                 
        console.log(random);
        string = string + (" <img id=\""+ letter + "\" class=\"rack_blocks\" src=\"images/Scrabble_Tile_" + letter + ".jpg\">"); 
    }

    console.log(images);

    document.getElementById('rack').innerHTML = string;
    JQueryDragDrop(); 

    document.getElementById('score').innerHTML = " ";
    document.getElementById('word').innerHTML = " ";

}