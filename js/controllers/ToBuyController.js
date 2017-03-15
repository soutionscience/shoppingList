
app.controller('ToBuyController', ToBuyController);	

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService']  ;
function  ToBuyController ($scope , ShoppingListCheckOffService){
	  $scope.data = ShoppingListCheckOffService.data;
	  // console.log( "Before click "+ ":" + itemIndex);

	  $scope.buyItem= function (itemIndex) {
	  	ShoppingListCheckOffService.removeItem(itemIndex);
	   //ShoppingListCheckOffService.addItems(itemIndex);
	  	console.log( itemIndex);
	  };

	  
};
