(function() {
	function MainControl() {
		this.title = "Bloc Chat";
	}

	angular
		.module('blocChat')
		.controller('MainControl', MainControl);

})();