//Task 1 Current Date
let today = new Date();

console.log("Today's Date :", today);

/*Output:

Today's Date : Thu Aug 06 2026 09:30:00 GMT+0530*/



//Task 2 – Specific Date

let date = new Date(2026, 7, 6);

console.log("Date :", date);

/*Output:

Date : Thu Aug 06 2026 00:00:00 GMT+0530 */

//Task 3  Birthday Date

let birthday = new Date(2000, 4, 15);

console.log("Birthday :", birthday);

/*Output:

Birthday : Mon May 15 2000 00:00:00 GMT+0530*/

//Task 4  Meeting Date and Time

let meeting = new Date(2026, 7, 6, 10, 30, 0);

console.log("Meeting Date :", meeting);

/*Output:

Meeting Date : Thu Aug 06 2026 10:30:00 GMT+0530 */

//Task 5  Date Components

let date = new Date(2026, 7, 6);

console.log("Day :", date.getDate());
console.log("Month :", date.getMonth() + 1);
console.log("Year :", date.getFullYear());

/*Output:

Day : 6
Month : 8
Year : 2026*/

//Task 6 – Age Calculator

let birthDate = new Date(2000, 4, 15);

let currentDate = new Date();

let birthYear = birthDate.getFullYear();
let currentYear = currentDate.getFullYear();

let age = currentYear - birthYear;

console.log("Birth Year :", birthYear);
console.log("Current Year :", currentYear);
console.log("Age :", age);

/*Output:

Birth Year : 2000
Current Year : 2026
Age : 26*/

//Task 7 Christmas Date 🎄

let christmas = new Date(2026, 11, 25);

console.log("Christmas Date :", christmas);

/*Output:

Christmas Date : Fri Dec 25 2026 00:00:00 GMT+0530 */

//Task 8 Day Finder

let date = new Date(2026, 7, 6);

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Date :", date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
console.log("Day :", days[date.getDay()]);

/*Output:

Date : 6/8/2026
Day : Thursday */