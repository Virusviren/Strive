/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
let arr = [1,2,3,4,5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let info={
    name:"Viren",
    surname:"Patil",
    email:"virenpatil1@outlook.com",
    age:22
}
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */
info.drivingLicense=true

/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */
delete info.age
console.log(info);
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
let info2 = {
    name:"Viren",
    surname:"Patil",
    email:"virenpatil@outlook.com",
    age:22
}
let ans = (info.email===info2.email)? true:false;
console.log(ans);
/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/


/* WRITE YOUR CODE HERE */
function freeDelivery(total){
    return total>=50 ? "Free Delivery":"Pay for shipping"
    }
    console.log(freeDelivery(100));

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
function blackFriday(total){
    discountedPrice = total - (total*20/100)
    return discountedPrice>=50 ? "Free Delivery":"Pay for shipping" + total
    }
    console.log(blackFriday(30));
    console.log(blackFriday(100));

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */
let car1={
    barnd:"Honda",
    model:"City",
    licensePlate: 1001
}

let car2= Object.assign({},car1)
car2.licensePlate=1002
let car3= Object.assign({},car1)
car3.licensePlate=1003
let car4= Object.assign({},car1)
car4.licensePlate=1004
let car5= Object.assign({},car1)
car5.licensePlate=1005
console.log(car1.licensePlate,car2.licensePlate,car3.licensePlate,car4.licensePlate,car5.licensePlate);
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
let carsForRent=[car1,car2,car3,car4,car5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.shift()
carsForRent.pop()
console.log(carsForRent);
/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/
console.log(typeof car1, typeof car1.licensePlate, typeof car1.barnd);
/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */
let car6= Object.assign({},car1)
car6.licensePlate=1006
let car7= Object.assign({},car1)
car7.licensePlate=1007
let car8= Object.assign({},car1)
car8.licensePlate=1008

let carsForSale = [car6,car7,car8]
let totalCars = carsForRent.length+carsForSale.length
// let x = carsForSale.concat(carsForRent)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(carsForSale);
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/