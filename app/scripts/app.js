(function() {

	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('main', {
				url: '/',
				controller: 'MainControl as main',
				templateUrl: '/templates/main.html'
			})
			.state('rooms', {
				url: '/',
				controller: 'RoomControl as rooms',
				templateUrl: '/templates/rooms.html'
			});
	}

	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);

})();
