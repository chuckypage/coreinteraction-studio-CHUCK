$(document).ready(function(){

	function popup(mylink, windowname, windowTop, windowLeft)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=400,height=400,top=' + windowTop + ',left=' + windowLeft + ',scrollbars=yes');
return false;
}


	// function add(x, y) {
	// 	alert(x+y);
	// }

	// add(1, 2);
	// add(2, 3);
	// add(5, 6);



	//$(window).on("load", function() {
		//popup('index-popone.html', 'ad', 100, 100);
		//popup('index-poptwo.html', 'ad2', 500, 500);
		//popup('autopopup.html', 'ad3', 300, 300);
		//popup('autopopup.html', 'ad4', 400, 400);
		//popup('autopopup.html', 'ad5', 600, 600);
		//popup('autopopup.html', 'ad6', 800, 800);
		//popup('autopopup.html', 'ad7', 50, 50);
		//popup('autopopup.html', 'ad8', 80, 80);
		//popup('autopopup.html', 'ad9', 900, 900);
	//});
	$('.hidden').click(function(e) {
		var x = e.pageX + 'px';
		var y = e.pageY + 'px';

		popup('index-popone.html', 'ad', 100, 100);
		popup('index-poptwo.html', 'ad2', 500, 500);
		popup('index-popthree.html', 'ad3', 50, 300);
		popup('index-popfour.html', 'ad4', 400, 400);
		popup('index-popfive.html', 'ad5', 600, 600);
		popup('index-popsix.html', 'ad6', 800, 800);
		popup('index-popseven.html', 'ad7', 30, 300);
		
	
	});

	$(document).on('mousemove', function(e){
		$('#cursor').css({
			left:  e.pageX,
			top:   e.pageY,
            pointerEvents: 'none'

	});
});

});