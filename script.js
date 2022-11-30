/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("\n------------------------EXERCISE 1-----------------------------\n")

let first5PositiveNumbers = [1, 2, 3, 4, 5]
console.log("The first 5 positive numbers are: ", first5PositiveNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n------------------------EXERCISE 2-----------------------------\n")

let myInfo = {
    name: "Muhammed Yasir",
    surname: "Ozdemir",
    emailAddress: "yasiryksmail@gmail.com",
    age: 20
}
console.log("name:", myInfo.name);
console.log("surname:", myInfo.surname);
console.log("email adress:", myInfo.emailAddress);
console.log("age:", myInfo.age);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent whether you have or not a driving license.
*/

console.log("\n------------------------EXERCISE 3-----------------------------\n")

myInfo.haveDriversLicense = true;
console.log("This person has a drivers license", myInfo.haveDriversLicense);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n------------------------EXERCISE 4-----------------------------\n")

delete myInfo.age;
console.log("Age is", myInfo.age, "because it's deleted.");

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n------------------------EXERCISE 5-----------------------------\n")

let anotherInfo = {
    name: "John",
    surname: "Doe",
    emailAddress: "yasirozdmr@yandex.com",
    age: 25
}
console.log("name:", anotherInfo.name);
console.log("surname:", anotherInfo.surname);
console.log("email adress:", anotherInfo.emailAddress);
console.log("age:", anotherInfo.age);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n------------------------EXERCISE 6-----------------------------\n")

let totalShoppingCart = 60;
let amountWithShipping;
if (totalShoppingCart >= 50) {
    amountWithShipping = totalShoppingCart;
    console.log("Congrats! You don't have to pay for shipping. Total amount of your shopping is", amountWithShipping, "EUROs.");
} else {
    amountWithShipping = totalShoppingCart + 10;
    console.log("Unfortunately you have to pay 10 EUROs for shipping. Total amount of your shopping is", amountWithShipping, "EUROs.");
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n------------------------EXERCISE 7-----------------------------\n")

let totalShoppingCartBlackFriday = 30;
let amountWithShippingBlackFriday;
if (totalShoppingCartBlackFriday >= 50) {
    amountWithShippingBlackFriday = totalShoppingCartBlackFriday;
    console.log("Congrats! You got 20% discount thanks to Black Friday event. Also you don't have to pay for shipping. Total amount of your shopping is", (amountWithShippingBlackFriday * 0.8), "EUROs.");
} else {
    amountWithShippingBlackFriday = totalShoppingCartBlackFriday + 10;
    console.log("You got 20% discount thanks to Black Friday event. But unfortunately you have to pay 8 EUROs for shipping. Total amount of your shopping is", (amountWithShippingBlackFriday * 0.8), "EUROs.");
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n------------------------EXERCISE 8-----------------------------\n")

let car = {
    brand: "mustang",
    model: 1960,
    licensePlate: 123456
}
console.log("Car: ", car, "\n");

let carCopy1 = {};
carCopy1 = Object.assign(carCopy1, car);
carCopy1.brand = "impala";
carCopy1.licensePlate = 612345;
carCopy1.model = 1970;
console.log("Car Copy 1: ", carCopy1, "\n");

let carCopy2 = {};
carCopy2 = Object.assign(carCopy2, car);
carCopy2.brand = "challenger";
carCopy2.licensePlate = 561234;
carCopy2.model = 1980;
console.log("Car Copy 2: ", carCopy2, "\n");


let carCopy3 = {};
carCopy3 = Object.assign(carCopy3, car);
carCopy3.brand = "supra";
carCopy3.licensePlate = 456123;
carCopy3.model = 1990;
console.log("Car Copy 3: ", carCopy3, "\n");


let carCopy4 = {};
carCopy4 = Object.assign(carCopy4, car);
carCopy4.brand = "camaro";
carCopy4.licensePlate = 345612;
carCopy4.model = 2000;
console.log("Car Copy 4: ", carCopy4, "\n");


let carCopy5 = {};
carCopy5 = Object.assign(carCopy5, car);
carCopy5.brand = "miata";
carCopy5.licensePlate = 234561;
carCopy5.model = 2010;
console.log("Car Copy 5: ", carCopy5, "\n");
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n------------------------EXERCISE 9-----------------------------\n")

let carsForRent = [
    car,
    carCopy1,
    carCopy2,
    carCopy3,
    carCopy4,
    carCopy5,
]
console.log("Cars for rent:", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n------------------------EXERCISE 10-----------------------------\n")

carsForRent.splice(0, 1); //removing the first element
carsForRent.pop(); //removing the last element
console.log("After removing first and the last elements of the array \n");
console.log("Cars for rent:", carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n------------------------EXERCISE 11-----------------------------\n")

console.log("Type of car variable is:", typeof(car));
console.log("Type of brand is:", typeof(car.brand));
console.log("Type of model is:", typeof(car.model));
console.log("Type of license plate is:", typeof(car.licensePlate));

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n------------------------EXERCISE 12-----------------------------\n")

let carsForSale = [];
carsForSale.push(carCopy1);
carsForSale.push(carCopy3);
carsForSale.push(carCopy5);

let totalCars = carsForRent.length + carsForSale.length;

console.log("There are", carsForRent.length, "cars for rent,", carsForSale.length, "cars for sale. That makes total number of cars that are for rent or sale", totalCars, ".");

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n------------------------EXERCISE 13-----------------------------\n")

console.log("Using for loop, Cars for Sale are:\n")
for (let index = 0; index < carsForSale.length; index++) {
    console.log("Car", (index + 1), carsForSale[index], "\n");
}