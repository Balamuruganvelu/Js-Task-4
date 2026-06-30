let age = Number(prompt("Enter Age:"));
let idAvailable = confirm("Is Employee ID available?");
let attendance = Number(prompt("Enter Attendance Percentage:"));

if (age >= 18 && idAvailable && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}