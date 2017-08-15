function MainController($scope) {
	$scope.name = "Kelsey";
}

angular
	.module('app')
	.controller('MainController', MainController);