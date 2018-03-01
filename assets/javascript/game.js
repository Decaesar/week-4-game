


$(document).ready(function() {

// variables //
var wins = 0;
var losses = 0;
var score= 0;
var counter =0;
var randomSelected = 0



var randomSelected = Math.floor(Math.random()*(102)+19);
$("#display").text(randomSelected); 

$("#hidCrystalValue").text(counter);
$("#wins").text("wins: " + wins);
$("#losses").text("losses: " + losses)

var randomHiddenValue = [ 
Math.floor(Math.random()*(12)+1), 
Math.floor(Math.random()*(12)+1), 
Math.floor(Math.random()*(12)+1), 
Math.floor(Math.random()*(12)+1), 
];

var onPic = [ 
"/Users/moha/DD/homework/week-4-game/assets/images/image1.jpg", 
"/Users/moha/DD/homework/week-4-game/assets/images/image2.jpg",
"/Users/moha/DD/homework/week-4-game/assets/images/image3.jpg",
"/Users/moha/DD/homework/week-4-game/assets/images/image4.jpg",
] ;


var cr = $("#crystalsImages");

//  placing the first image //
for (var i=0; i<randomHiddenValue.length; i++) {
var crystalImage = $("<img>");
crystalImage.addClass("imageclass");
crystalImage.attr("src", onPic[i]);
crystalImage.attr("data-crystalvalue", randomHiddenValue[i]);
cr.append(crystalImage);

}

$(".imageclass").on("click", function() {
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
counter += crystalValue;

$("#hidCrystalValue").text(counter);

if (randomSelected == counter) {
   alert("you win");
   wins++;
   $("#wins").text("wins: " + wins);
   resetRandSeleced ();
   reset ();
   
   
} else if (counter >= randomSelected) {

   alert ("you lost");
   losses++;
   $("#losses").text("losses: " + losses);
   alert (" lets Play Again "); 
   resetRandSeleced ();   
   reset();  
}

});

function resetRandSeleced () {  
counter = 0;
$("#hidCrystalValue").text(counter);
randomSelected = Math.floor(Math.random()*(102)+19);
$("#display").text(randomSelected); 
}  

function reset () {
  randomHiddenValue = [];
  for (i=0; i<4; i++) {
   var point =   Math.floor(Math.random()*(12)+1);
   randomHiddenValue.push(point);
   crystalImage.attr("src", onPic[i]);
   crystalImage.attr("data-crystalvalue", randomHiddenValue[i]);
  }
   
   console.log(point);
   console.log(randomHiddenValue);

}

}); 

