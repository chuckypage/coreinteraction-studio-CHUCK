$(function() {
    $( ".iframe" ).draggable();
    
    	
  });

$(document).on('mousemove', function(e){
	$('.cursor').css({
		left:  e.pageX,
		top:   e.pageY,
        pointerEvents: 'none'

		});

	
	});	
