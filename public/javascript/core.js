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
	
	// Controls Company scroll in experience section
	if ( $(window).width() > 1720 ) {
		$(".title").hover(
			function() {
				$(this).next().hide().text('Electric City Printing').fadeIn(200);
			}, function() {
				$(this).next().hide().text('ECP').fadeIn(200);

			}
		);
	}

	// Change order of divs at low page width
	if( $(window).width() < 1000 ) {
        $("#experience").remove().insertAfter($("#bio"));
        $(".company").text("Electric City Printing");
    }

    // Remove button hover on paghead at sizes less than 450px
    if( $(window).width() < 450 ) {
        $("#navContainer").find('li').removeClass('hvr-float');
    }
});

// Change order of divs at low page width

$(document).load($(window).bind("resize", listenWidth));

function listenWidth( e ) {
    if( $(window).width() < 1000 ) {
        $("#experience").remove().insertAfter($("#bio"));
    }
}

// Autogrows input fields where 'autogrow' class is attached
$(function(){
    $("input.autogrow").autoGrowInput({minWidth:170,comfortZone:10});
});