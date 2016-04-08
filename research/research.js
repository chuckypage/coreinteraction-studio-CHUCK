
		$(document).on('mousemove', function(e){
		$('#cursor').css({
			left:  e.pageX,
			top:   e.pageY,
            pointerEvents: 'none'
		});

		// $("#toaster").html('<object data="http://www.cartelle.nl/toy/toaster/" />');
	});