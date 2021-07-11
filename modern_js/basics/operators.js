var sellingPrice=199;
var listPrice=799;
var discountPercent=((listPrice-sellingPrice)*100)/listPrice;

console.log("discount price is "+discountPercent);
displayDiscountPercentage=Math.round(discountPercent);

console.log(displayDiscountPercentage);
var result=listPrice>sellingPrice
console.log(typeof result);
