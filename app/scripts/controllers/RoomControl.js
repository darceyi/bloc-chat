(function() {
	function RoomControl() {
		this.title = "Room View";
	}

	angular
		.module('blocChat')
		.controller('RoomControl', RoomControl);

})();