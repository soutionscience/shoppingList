app.controller('ToBuyController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService){
	// console.log("mastery");
	// $scope.name =" mastery of angular"

	  
	  $scope.data = ShoppingListCheckOffService.data;

	
}])