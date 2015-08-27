function sendEmail() {

	var emailContent = JSON.stringify( 
		{
			email: $('input[name=fromEmail]').val(),
			subject: $('input[name=subject]').val(),
			message: $('textarea[name=message]').val()
		}
	);

	var httpRequest;
	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    	httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // IE 6 and older
    	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	httpRequest.open('POST','/message', true);
	httpRequest.setRequestHeader("Content-Type","application/json");
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			var response = JSON.parse(httpRequest.responseText);
			if(response.success == true) {
				$('#fromEmail').val('');
				$('#subject').val('');
				$('#message').val('');
				$('#confirmation').addClass('success').css("border-color", "rgb(57,135,57)").text('YOUR MESSAGE WAS SENT SUCCESSFULLY.');
				$('#confirmation').animate({opacity:1});
				$('#confirmation').delay(5000).animate({opacity:0});
			} else {
				$('#fromEmail').val('');
				$('#subject').val('');
				$('#message').val('');
				$('#confirmation').addClass('failure').css("border-color", "rgb(135,57,57)").text('AN ERROR HAS OCCURRED.');
				$('#confirmation').animate({opacity:1});
				$('#confirmation').delay(5000).animate({opacity:0});
			};
		}
	}

	httpRequest.send(emailContent);
}