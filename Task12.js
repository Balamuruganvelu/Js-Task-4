let name1 = prompt("Enter Name:");
let age = prompt("Enter Age:");
let acceptTerms = confirm("Do you accept Terms?");

if (acceptTerms) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}