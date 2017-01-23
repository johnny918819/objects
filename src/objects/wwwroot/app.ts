let markerOne = {
    color: "purple",
    price: 0.99,
};
console.log(markerOne.color);

let markerTwo = {
    color: "Green",
    price: 5000
};
console.log(markerTwo.color);

let firstProduct = {
    name: "milk",
    price: 1.99,

    calculateTax(taxRate: number) {
        return this.price * taxRate;
    }
}

let milkTax: number = firstProduct.calculateTax(.08);

console.log(milkTax);