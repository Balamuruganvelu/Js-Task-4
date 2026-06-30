let employees = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
];

let presentCount = 0;
let absentCount = 0;

console.log("Present Employees:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].status === "Present") {
        console.log(employees[i].name);
        presentCount++;
    }
}

console.log("Absent Employees:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].status === "Absent") {
        console.log(employees[i].name);
        absentCount++;
    }
}

console.log("Total Present: " + presentCount);
console.log("Total Absent: " + absentCount);