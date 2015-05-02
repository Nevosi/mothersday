$("#loading").fadeOut().load("#page", function(response, status, xhr) {
	 if (status == "error") {
		  // handle error
	 }
	 else
	 {
		  $("#page").fadeIn();
	 }
});
