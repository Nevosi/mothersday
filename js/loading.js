function onReady(callback) {
	 var intervalID = window.setInterval(checkReady, 4000);

	 function checkReady() {
		  if (document.getElementsByTagName('body')[0] !== undefined) {
				window.clearInterval(intervalID);
				callback.call(this);
		  }
	 }
}

function show(id, value) {
	 document.getElementById(id).style.display = value ? 'flex' : 'none';
}

onReady(function () {
	 show('page', true);
	 show('loading', false);
});
