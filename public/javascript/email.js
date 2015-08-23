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
				alert('Your message has been sent. Thanks!')
			};
		}
	}

	httpRequest.send(emailContent);
}