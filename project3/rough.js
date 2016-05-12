$(function() {
	$(document).ready(function() {
    $(".console").draggable({ containment: "body"});
    // $(".console-img").resizable();
    
  });

var currentBackground = 1;
var bgClasses = ['fire', 'morning', 'swoosh', 'birds', 'beach', 'edge'];

function prevBg() {
	currentBackground -= 1;
	if (currentBackground < 0) currentBackground = bgClasses.length -1;
	setBg();
}

function nextBg() {
	currentBackground += 1;
	if (currentBackground >= bgClasses.length) currentBackground = 0;
	setBg();
}

function setBg() {
	$('.bg').hide();
	$('.' + bgClasses[currentBackground]).show();
}


var currentFigure = 0;
var figureClasses = [ 'console-figure-23', 'console-figure-22', 'console-figure-21', 'console-figure-20', 'console-figure-19', 
'console-figure-19', 'console-figure-18', 'console-figure-17', 'console-figure-16', 'console-figure-15', 'console-figure-14', 'console-figure-13',
'console-figure-12', 'console-figure-11', 'console-figure-10', 'console-figure-9', 'console-figure-8', 'console-figure-7', 'console-figure-6',
'console-figure-5', 'console-figure-4', 'console-figure-3', 'console-figure-2', 'console-figure-1' ];

function prevFigure() {
	currentFigure -=1;
	if (currentFigure < 0) currentFigure = figureClasses.length -1;
	setFigure();
}

function nextFigure() {
	currentFigure += 1;
	if (currentFigure >= figureClasses.length) currentFigure = 0;
	setFigure();
}

function setFigure() {
	$('.console-figure').hide();
	$('.' + figureClasses[currentFigure]).show();
}



var currentAudio = 0;
var audioClasses = [ 'selfhelpyo.m4a', 'groove.m4a', 'beautiful.m4a', 'elevator.m4a'];
var songs = []

function prevAudio() {
	songs[currentAudio].pause();
	currentAudio -=1;
	if (currentAudio < 0) currentAudio = audioClasses.length -1;
	setAudio();
}

function nextAudio() {
	songs[currentAudio].pause();
	currentAudio += 1;
	if (currentAudio >= audioClasses.length) currentAudio = 0;
	setAudio();
}

function setAudio() {
		songs[currentAudio].play();


}

// generating audio elements for all songs
for (var i =0; i < audioClasses.length; ++i) {
	var currentSong = audioClasses[i]
	var audio = new Audio();
	audio.src= currentSong
	songs.push(audio)
}

setAudio();







Chat.onMessage(function (data) {

	if (data.value == 0) {
		prevBg();
	} else if (data.value == 1) {
		prevBg();
	} else if (data.value == 2) {
		nextBg();
	} else if (data.value == 3) {
		nextBg();
	} else if (data.value == 4) {
		prevFigure();
	} else if (data.value == 5) {
		prevFigure();
	} else if (data.value == 6) {
		nextFigure();
	} else if (data.value == 7) {
		nextFigure();
	} else if (data.value == 8) {
		prevAudio();
	} else if (data.value == 9) {
		prevAudio();
	} else if (data.value == 10) {
		nextAudio();
	} else if (data.value == 11) {
		nextAudio();
	} else if (data.value == 12) {
		nextAudio();
	}
});



/*
	var rand = Math.random();
	if(rand < 0.33) {
		sendMessage(0);
	} else if (rand > 0.33 && rand < 0.66) {
		sendMessage(1)
	} else if (rand > 0.66) {
		sendMessage(2);
	}
*/

$('.console-back').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 0
	});
	
});
$('.console-forward').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 2
	});
});
$('.console-minus').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 4
	});
});
$('.console-plus').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 6
	});
});
$('.console-playback').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 8
	});
});
$('.console-playforward').click(function() {
	Chat.sendMessage({
	  sender: 'suhhh',
	  type: 'raw',
	  value: 10
	});
});



});


