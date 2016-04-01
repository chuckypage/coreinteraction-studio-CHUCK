$(document).ready(function(){

	$('.flash').click(function() {
		$('.added').toggle();
		$(document).ready(function(){
    $('.added').on("click", animateDiv);
});



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.added').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.added').animate({ top: newq[0], left: newq[1] }, speed);
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
		//if i want popups to appear when clicking titles
		//popup('index-popone.html', 'ad', 100, 100);
		//popup('index-poptwo.html', 'ad2', 600, 400);
		//popup('autopopup.html', 'ad3', 300, 300);
	});

	$('.second').click(function() {
		$('.secondadd').toggle();
	});


	$('.third').click(function() {
		$('.thirdadd').toggle();
	});
	$(document).ready(function(){
    $('.thirdadd').on("click", animateDiv);
});



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.thirdadd').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.thirdadd').animate({ top: newq[0], left: newq[1] }, speed);
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

	$(document).ready(function(){
    $('.secondadd').on("click", animateDiv);
});



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.secondadd').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.secondadd').animate({ top: newq[0], left: newq[1] }, speed);
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}


		$(document).on('mousemove', function(e){
		$('#cursor').css({
			left:  e.pageX,
			top:   e.pageY,
            pointerEvents: 'none'
		});
	});
	
});