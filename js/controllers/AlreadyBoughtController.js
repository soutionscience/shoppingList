
app.controller('AlreadyBoughtController', AlreadyBoughtController);
	AlreadyBoughtController.$inject = ['$scope' , 'ShoppingListCheckOffService'];

	function AlreadyBoughtController( $scope, ShoppingListCheckOffService){

	$scope.boughtItems =ShoppingListCheckOffService.boughtItems


	
};

