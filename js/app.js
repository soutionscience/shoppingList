(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


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

AlreadyBoughtController.$inject = ['$scope' , 'ShoppingListCheckOffService'];

	function AlreadyBoughtController( $scope, ShoppingListCheckOffService){

	$scope.boughtItems =ShoppingListCheckOffService.boughtItems


	
};

function ShoppingListCheckOffService(){


    this.data= [{
    	name: "cookies", 
    	quantity: 10

    },
    {
    	name: "chocolates",
    	quantity:15
    },
     {
    	name: "pizza",
    	quantity:5
    },
     {
    	name: "Packets of chips",
    	quantity:3
    },
    {
    	name: "samosas",
    	quantity:4
    }
    ];

    this.boughtItems=[];

    this.removeItem= function(itemIndex){
    	var item = this.data[itemIndex];
    	this.boughtItems.push(item)
    	this.data.splice(itemIndex, 1);
  

    	


    }

};

})();