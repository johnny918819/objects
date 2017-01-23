var markerOne = {
    color: "purple",
    price: 0.99,
};
console.log(markerOne.color);
var markerTwo = {
    color: "Green",
    price: 5000
};
console.log(markerTwo.color);
var firstProduct = {
    name: "milk",
    price: 1.99,
    calculateTax: function (taxRate) {
        return this.price * taxRate;
    }
};
var milkTax = firstProduct.calculateTax(.08);
console.log(milkTax);
