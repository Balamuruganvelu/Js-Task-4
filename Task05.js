let purchase = 6000;
let isPremium = true;

let discountPercent;

if (purchase > 5000 && isPremium) {
    discountPercent = 20;
} else {
    discountPercent = 10;
}

let discount = (purchase * discountPercent) / 100;
let finalPrice = purchase - discount;

console.log("Original Price : " + purchase);
console.log("Discount : " + discount);
console.log("Final Price : " + finalPrice);