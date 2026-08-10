//Task 1  Student Registration

let student = {
    name: "Rahul",
    age: 20,
    department: "CSE",
    courseFee: 50000
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Course Fee:", student.courseFee);

if (student.age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

/*Output:

Name: Rahul
Age: 20
Department: CSE
Course Fee: 50000
Eligible*/

//Task 2  Employee Salary Calculator

function calculateSalary(basic, bonus, deduction) {
    let totalSalary = basic + bonus - deduction;
    return totalSalary;
}

let basicSalary = 30000;
let bonus = 5000;
let deduction = 2000;

console.log("Total Salary:", calculateSalary(basicSalary, bonus, deduction));

/*Output:

Total Salary: 33000*/

//Task 3  Shopping Cart

let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

cart.push("Monitor");       // Add product
cart.pop();                 // Remove last product

console.log("Cart:", cart);
console.log("Total Products:", cart.length);
console.log("First Product:", cart[0]);
console.log("Last Product:", cart[cart.length - 1]);

/*Output:

Cart: [ 'Laptop', 'Mouse', 'Keyboard', 'Headphone' ]
Total Products: 4
First Product: Laptop
Last Product: Headphone*/

//Task 4  Login Validation

let storedUsername = "admin";
let storedPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}

/*Output:

Login Success*/

//Task 5  Movie Ticket Booking

let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

/*Output:

Eligible*/

//Task 6  Employee Search

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];

let employee = employees.find(emp => emp.name === "Kavin");

console.log(employee);

/*Output:

{ name: 'Kavin', salary: 40000 }*/

//Task 7  Product Filter

let products = [
    { name: "Pen", price: 50 },
    { name: "Bag", price: 800 },
    { name: "Book", price: 300 },
    { name: "Mouse", price: 450 }
];

let filteredProducts = products.filter(product => product.price < 500);

console.log(filteredProducts);

/*Output:

Pen - 50
Book - 300
Mouse - 450*/

//Task 8  Student Marks

let marks = [45, 56, 67, 89];

let newMarks = marks.map(mark => mark + 5);

console.log(newMarks);

/*Output:

[50, 61, 72, 94]*/

//Task 9  Attendance Checker

let marks = [90, 85, 70, 65];

let result = marks.every(mark => mark > 50);

console.log(result);

/*Output:

true*/

//Task 10  OTP Generator

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);

/* Output:

OTP: 583924

The OTP will be different every time.*/

//Task 11  Password Strength Checker

let password = "Abc@1234";

let hasMinimumLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);
let hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

if (
    hasMinimumLength &&
    hasNumber &&
    hasUppercase &&
    hasSpecialCharacter
) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

/*Output:

Strong Password*/

//Task 12  Product Search

let products = ["Laptop", "Mobile", "Watch", "Camera"];

let searchProduct = "Mobile";

if (products.includes(searchProduct)) {
    console.log("Available");
} else {
    console.log("Not Available");
}

/*Output:

Available*/

//Task 13  Current Digital Clock

function digitalClock() {
    let now = new Date();

    let time = now.toLocaleTimeString();

    console.log(time);
}

digitalClock();

setInterval(digitalClock, 1000);

/* Output:

10:35:24 AM
10:35:25 AM
10:35:26 AM
10:35:27 AM*/

//Task 14  Countdown Timer

let count = 10;

let timer = setInterval(() => {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);

/*Output:

10
9
8
7
6
5
4
3
2
1
0*/

//Task 15  Fake API Product Viewer

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {
            console.log("Product Image:", product.image);
            console.log("Product Name:", product.title);
            console.log("Price:", product.price);
            console.log("----------------------");
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });

/*Output:

Product Image: https://...
Product Name: Fjallraven Backpack
Price: 109.95
----------------------
Product Image: https://...
Product Name: Mens Casual Premium Slim Fit T-Shirts
Price: 22.3
----------------------*/

//Task 16  Employee Dashboard

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

let averageSalary = totalSalary / employees.length;

let highestSalary = employees.reduce((highest, employee) => {
    return employee.salary > highest ? employee.salary : highest;
}, 0);

console.log("Total Salary:", totalSalary);
console.log("Average Salary:", averageSalary);
console.log("Highest Salary:", highestSalary);

/*Output:

Total Salary: 120000
Average Salary: 40000
Highest Salary: 55000*/

//Task 17  Online Food Order

let menu = ["Pizza", "Burger", "Shawarma", "Fries"];

let order = [];

order.push("Pizza");
order.push("Burger");

console.log("Order:", order);

order.pop();

console.log("After Removing:", order);
console.log("Total Items:", order.length);

console.log("Bill:");
order.forEach(item => {
    console.log(item);
});

/*Output:

Order: [ 'Pizza', 'Burger' ]
After Removing: [ 'Pizza' ]
Total Items: 1

Bill:
Pizza*/

//Task 18  Bank Account

let account = {
    accountHolder: "Rahul",
    balance: 10000,

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    },

    checkBalance() {
        console.log("Current Balance:", this.balance);
    }
};

console.log("Account Holder:", account.accountHolder);

account.checkBalance();
account.deposit(5000);
account.withdraw(2000);
account.checkBalance();

/*Output:

Account Holder: Rahul
Current Balance: 10000
Deposited: 5000
Withdrawn: 2000
Current Balance: 13000*/

//Task 19  To-Do List

let tasks = [];

// Add Task
tasks.push("Learn JavaScript");
tasks.push("Practice Functions");
tasks.push("Complete Project");

console.log("All Tasks:", tasks);

// Update Task
tasks[1] = "Practice Arrays";

console.log("After Update:", tasks);

// Delete Task
tasks.splice(2, 1);

console.log("After Delete:", tasks);

// Show All Tasks
console.log("Final Tasks:", tasks);

/*Output:

All Tasks:
Learn JavaScript
Practice Functions
Complete Project

After Update:
Learn JavaScript
Practice Arrays
Complete Project

After Delete:
Learn JavaScript
Practice Arrays*/

//Task 20  Mini E-Commerce Product Management

let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 5
    },
    {
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        stock: 10
    },
    {
        name: "Shoes",
        price: 2000,
        category: "Fashion",
        stock: 8
    }
];

// Add Product
products.push({
    name: "Watch",
    price: 3000,
    category: "Fashion",
    stock: 6
});

// Search Product
let searchProduct = products.find(product => product.name === "Mobile");
console.log("Search Result:", searchProduct);

// Filter by Category
let fashionProducts = products.filter(
    product => product.category === "Fashion"
);

console.log("Fashion Products:", fashionProducts);

// Total Stock
let totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
);

console.log("Total Stock:", totalStock);

// Total Inventory Value
let inventoryValue = products.reduce(
    (total, product) => total + (product.price * product.stock),
    0
);

console.log("Total Inventory Value:", inventoryValue);

/*Output:

Search Result: {
  name: 'Mobile',
  price: 20000,
  category: 'Electronics',
  stock: 10
}

Fashion Products:
Shoes
Watch

Total Stock: 29
Total Inventory Value: 415000*/