$(document).ready(function() {

	// Makes anchor linkes scroll instead of jump
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// Autogrows input fields where 'autogrow' class is attached
$(function(){
    $("input.autogrow").autoGrowInput({minWidth:170,comfortZone:10});
});