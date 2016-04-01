$(document).ready(function() {
    $(".one").draggable().resizable();
    $( ".two" ).draggable().resizable();
    $( ".three" ).draggable().resizable();
    $( ".four" ).draggable().resizable();
    $( ".five" ).draggable().resizable();
    $( ".eight" ).draggable().resizable();
    $( ".titleone" ).draggable().resizable();
    $( ".title" ).draggable().resizable();
    $( ".nine" ).draggable().resizable();
    $( ".ten" ).draggable().resizable();
    $( ".eleven" ).draggable().resizable();
  });
 
 $(document).click(function() {
 	$(".nine").show();
    $(".ten").show();
    $(".eleven").show();
 });




$(document).on('mousemove', function(e){
	$('.cursor').css({
		left:  e.pageX,
		top:   e.pageY,
        pointerEvents: 'none'

		});

	
	});	