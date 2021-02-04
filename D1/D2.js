/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old



/* WRITE YOUR ANSWER HERE */
// The main datatypes in JS are
// 1. Number which is the particular used for the number. this type of data will always be number for ex let num x = 10;
// But if you use const than using let then it will not change its data type
let num  = 10;
console.log(typeof num)
// 2. String which is the group of the letters or the integers. this datatype is used to show the name or to display some message
let str = "Viren"
console.log(typeof str)
// 3. Object is the another type of datatype in the js this is mainly used to show the various information in the form of object
let obj = {
    name:"Viren",
    age: 22,
    country:"Poland"
}
console.log(typeof obj);
console.log(obj);
console.log(obj.country);
/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE */
//  Variable are used to store assign some sort of information to a particular entity to you and to remember in future
/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

/* WRITE YOUR CODE HERE */
console.log(12+20);
/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */
let x = 12;
/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

/* WRITE YOUR CODE HERE */
let name = "John Doe"
/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/


/* WRITE YOUR CODE HERE */
console.log(x-12);
/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */

let name1 = "john"
let name2 = "John"
console.log(name1==name2);
console.log(name1==name2.toLowerCase());
/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
//  let is assigend already so using a as the variable name
let a = 10;
if(a>10){
    console.log("Number is greater than 10");
    }
    else if(a<0) {
        console.log("Number is smaller than 0");
        }
else if(a==0) {
    console.log("Zero");
    }
else if(a==1) {
console.log("One");
}
else if(a==2) {
    console.log("Two");
    }
    else if(a==3) {
        console.log("Three");
        }
        else if(a==4) {
            console.log("Four");
            }
            else if(a==5) {
                console.log("Five");
                }
                else if(a==6) {
                    console.log("Six");
                    }
                    else if(a==7) {
                        console.log("Seven");
                        }else if(a==8) {
                            console.log("Eight");
                            }else if(a==9) {
                                console.log("Nine");
                                }else if(a==10) {
                                    console.log("Ten");
                                    }
                                    else{
                                        console.log("Is not a number")
                                    }
                    

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */
var age = 26;
var serve = (age>=18)?"Can serve alcohol":"Cant serve alcohol";
console.log(serve);


/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/