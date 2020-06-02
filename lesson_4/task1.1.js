"use strict";
function Product(name, price){
    this.name = name;
    this.price = price;

   
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
}
Product.prototype.info =  function () {
        console.log(this.name + '('+ this.price+ ')');
}

let Products = [
    new Product("pr1", 200),
    new Product("pr2", 1000),
    new Product("pr3", 2000)
];
for(let i = 0; i < 3; i++){
    Products[i].info(); 
    Products[i].make25PercentDiscount();
    Products[i].info(); 
}


/*===============================================================*/
class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price*0.75;
    }
    info(){
        console.log(this.name + '('+ this.price+ ')');
    }
}

const pr4 = new Product2("pr4", 5000);
pr4.info();
pr4.make25PercentDiscount();
pr4.info();