let mobile = prompt("Enter Mobile Number:");

if (mobile.length === 10 && (mobile[0] === "6" || mobile[0] === "7" || mobile[0] === "8" || mobile[0] === "9")) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}