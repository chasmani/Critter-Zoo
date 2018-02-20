/* Grab canvas and amke context */
var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');

console.log("In game");

var critters = []
var inventory = []
var enclosures = []


function setup(){
	canvas.height = canvas.offsetHeight;
	canvas.width = canvas.offsetWidth;
	canvas.style.backgroundColor = "#6BB9F0";
}

// Types based on botstrap types - info, success, warning, danger
function message(type, text, delay){
	if(!delay){
		delay = 1;
	}
	
	setTimeout(function(){ $("#game-messages-section").prepend($('<div class="alert alert-' + type + '">' + text + '</div>').fadeIn('slow'));	 }, delay);	
}

function button(event, text, delay){
	if(!delay){
		delay = 1;
	}

	setTimeout(function(){ $("#game-controls-section").prepend($('<button class="btn btn-default" onclick="' + event + '">' + text + '</button>').fadeIn('slow'));	 }, delay);
}

function Critter(type) {

	this.type = type;

}

function Enclosure(type) {

	this.type = type;
	this.id = "enc-1"

}


function introduction(){

	message("info", "You hear a knock at the door of your apartment",1000);
	message("info", "You go and see who it is", 4000);
	message("success", "It's your Uncle Jeoffrey! You haven't seen him in over a year", 7000);
	message("info", "You let him in for a cup of tea",10000);
	
	message("info", "Uncle Jeoffrey tells you all about his latest adventure, exploring in the rainforest", 13000);
	message("info", "During the tale, you hear a noise coming from Uncle Jeoffrey's bag and look over at it",20000);
	message("success", '"Oh yes!" he says, "I have a present for you',23000);

	button("openPresent(event)", "Open Present", 1);
}



function openPresent(event) {

	console.log(event);
	$(event.target).addClass("hidden");

	console.log("Opening Present");
	mouse = new Critter("Mice");
	critters.push(mouse);

	basicCage = new Enclosure("Basic Cage");
	enclosures.push(basicCage);

	updateView();
}


function showEnclosure(enclosure){

	// Only show if not already in it
	if($('#' + enclosure.id).length==0){
		var enclosureElement = '<div class="panel panel-default enclosure" id="' + enclosure.id +'">' + 
  		'<div class="panel-heading">' + enclosure.type + '</div>' +
  		'<div class="panel-body"></div>' +
		'</div>'

		$("#game-enclosures-section").prepend($(enclosureElement).fadeIn('slow'));	
	}	
}


function updateView() {


	for (i=0; i<enclosures.length; i++){

		showEnclosure(enclosures[i])

	}



}





setup();
introduction();

// Maybe have some kind of delay pipeline, where things can be dropped and then they only show up in order/after so long