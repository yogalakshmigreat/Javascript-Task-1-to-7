//Task 1: Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Task 2: E-Commerce Discount

let amount = 6500;
let discount = 0;

if (amount >= 5000) {
    discount = amount * 20 / 100;
    console.log("20% Discount Applied");
} else {
    console.log("No Discount");
}

let finalAmount = amount - discount;

console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//Task 3: ATM Withdrawal

let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

//Task 4: Student Grade System

let mark = 87;

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80) {
    console.log("Grade B");
}
else if (mark >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

//Task 5: Traffic Signal

let signal = "green";

switch (signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid");
}

//Task 6: Online Shopping Delivery Charge

let order = 750;
let delivery = 0;

if (order >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

let total = order + delivery;

console.log("Order Amount:", order);
console.log("Delivery:", delivery);
console.log("Total:", total);

//Task 7: User Age Verification

let age = Number(prompt("Enter Age:"));

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

//Task 8: Largest Among 3 Numbers

let a = 10;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log(a, "is Largest");
}
else if (b > a && b > c) {
    console.log(b, "is Largest");
}
else {
    console.log(c, "is Largest");
}

//Task 9: Mobile Password

let pin = prompt("Enter 4-digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

//Task 10: Product Stock

let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}

//Task 11: Employee Salary Bonus

let salary = 45000;

if (salary > 50000) {
    console.log("Bonus: 10000");
}
else if (salary > 30000) {
    console.log("Bonus: 5000");
}
else {
    console.log("Bonus: 2000");
}

//Task 12: Electricity Bill

let units = 250;
let bill;

if (units <= 100) {
    bill = units * 2;
}
else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
}
else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Electricity Bill:", bill);

//Task 13: Movie Ticket Booking

let age = 20;

if (age < 5) {
    console.log("Free");
}
else if (age <= 18) {
    console.log("Ticket Price: ₹100");
}
else {
    console.log("Ticket Price: ₹200");
}

//Task 14: Hospital Token System

let patient = "Senior Citizen";

switch (patient) {

    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}

//Task 15: Company Attendance

let attendance = "Present";

switch (attendance) {

    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid");
}

//Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

if (total > 1000) {
    let discount = total * 10 / 100;
    total -= discount;
    console.log("10% Discount Applied");
}

console.log("Final Total:", total);

//Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log(i + 1, products[i]);
}

//Task 18: Employee Database

let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

//Task 19: Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);

//Task 20: Banking Menu

let choice = 2;

switch (choice) {

    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}

//Mini Project: Employee Management System (Console)

let employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 50000,
        attendance: "Present"
    }
];

let choice = Number(prompt(
`Employee Management System

1. Add Employee
2. Show Employee
3. Calculate Bonus
4. Check Attendance
5. Print Salary
6. Exit

Enter your Choice:`));

switch (choice) {

    case 1:
        let id = Number(prompt("Enter Employee ID:"));
        let name = prompt("Enter Employee Name:");
        let salary = Number(prompt("Enter Salary:"));
        let attendance = prompt("Enter Attendance:");

        employees.push({
            id,
            name,
            salary,
            attendance
        });

        console.log("Employee Added Successfully");
        break;

    case 2:
        console.log("Employee Details");

        for (let emp of employees) {
            console.log(`ID: ${emp.id}`);
            console.log(`Name: ${emp.name}`);
            console.log(`Salary: ${emp.salary}`);
            console.log(`Attendance: ${emp.attendance}`);
            console.log("------------------------");
        }
        break;

    case 3:
        for (let emp of employees) {

            let bonus = 0;

            if (emp.salary > 50000) {
                bonus = 10000;
            }
            else if (emp.salary > 30000) {
                bonus = 5000;
            }
            else {
                bonus = 2000;
            }

            console.log(`${emp.name} Bonus: ₹${bonus}`);
        }
        break;

    case 4:
        for (let emp of employees) {
            console.log(`${emp.name} Attendance: ${emp.attendance}`);
        }
        break;

    case 5:
        for (let emp of employees) {
            console.log(`${emp.name} Salary: ₹${emp.salary}`);
        }
        break;

    case 6:
        console.log("Thank You!");
        break;

    default:
        console.log("Invalid Choice");
}
