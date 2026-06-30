let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    let remaining = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remaining);
} else {
    console.log("Transaction Failed");
}