var currentIndex = 1;
var bgClasses = ['fire', 'morning' 'swoosh' 'birds' 'beach' 'edge'];

function prevBg() {
	currentIndex -= 1;
	if (currentIndex < 0) currentIndex = bgClasses.length -1;
	setBg();
}

function nextBg() {
	currentIndex += 1;
	if (currentIndex >= bgClasses.length) currentIndex = 0;
	setBg();

}

function setBg() {
	$('.all-background-selector').hide();
	$('.' + bgClasses[currentIndex]).show();

}

var figureClasses = [ 'figure-23', 'figure-22', 'figure-21', 'figure-20' 'figure-19', 
'figure-19', 'figure-18', 'figure-17', 'figure-16', 'figure-15', 'figure-14', 'figure-13',
'figure-12', 'figure-11', 'figure-10', 'figure-9', 'figure-8', 'figure-7', 'figure-6',
'figure-5', 'figure-4', 'figure-3', 'figure-2', 'figure-1'];

function prevfigure() {
	currentIndex -=1;
	if (currentIndex < 0) currentIndex = figureClasses.length -1;
	setBg();
}

function nextfigure() {
	currentIndex += 1;
	if (currentIndex >= figureClasses.length) currentIndex = 0;
	setBg();
}

function setfigure() {
	$('.all-figure-selector').hide();
	$('.' + figureClasses[currentIndex]).show();
}

var audioClasses = [ 'selfhelpyo', 'groove', 'beautiful', 'elevator'];
