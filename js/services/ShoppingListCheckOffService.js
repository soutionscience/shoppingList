
app.service('ShoppingListCheckOffService' ,function(){

    // this.myFunc = function (data) {

    //     return data;
    // }

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

});
