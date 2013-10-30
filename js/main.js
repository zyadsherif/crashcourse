$(document).ready(function() {
	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		if ($(this).data('layout') == "push"){
			$('body').toggleClass('menu-push');
		}
		else if ($(this).data('layout') == "slide"){
			$('body').toggleClass('menu-slide');
		}
	});

	$('.remove-class').click(function() {
		$('body').removeClass('menu-push');
		$('body').removeClass('menu-slide');
	});

});
