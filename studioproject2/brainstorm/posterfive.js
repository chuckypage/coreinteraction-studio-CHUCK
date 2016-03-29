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
 
 $(".nine").click (function() {
 	$(".nine:hover").show();
 });



$(document).on('mousemove', function(e){
	$('.cursor').css({
		left:  e.pageX,
		top:   e.pageY,
        pointerEvents: 'none'

		});

	
	});	