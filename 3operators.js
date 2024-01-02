// operators:- They are pre-defined signs and symbol that are designed to perform designated operations on operands. 
// // 1. Arithmetic Operators:
      // let num1 = 5;
      // let num2 = 4;

      // // a. Addition Operators(+)
      // console.log("The sum of " +num1 + num2 +" is "+ (num1+num2))
      // // b. Subtraction Operator(-)
      // console.log(num1 - num2)
      // // c. Multiplicatioin Operator(*)
      // console.log(num1 * num2)
      // // d. Division operator(/)
      // console.log(num1 / num2)
      // // e. Modulo Operator(%)
      // console.log(num1 % num2)
      // //f. Exponential Operator(**)
      // console.log(num1 ** num2)
      // //g. COncat Operator(+) (2 ota string lai + garxa )
      // console.log("tara"+"khadka")

      // // NaN (number data type but not a number)l  

      // // Type Coercion Vs Type Conversion(coercion: Changing data type forcefully or change by js  )




// 2. Comparision (Relational) Operator


// 3. Assignment Operators

// 4. Logical Operators

// 5. Special operators. 





// truthy vs falsy
// There are 7 falsy value in javascript, they are 0, -0, 0n, False, undefined, null, NaN
// except these values all the values in javascript are truthy values. 

// if (0) {
//    console.log("The value of thruthy");
// }
// else {
//    console.log("The value is falsy");
// }


// // Short circuting using Logical operators: It is the practice to write code to get required result based on behavior shown by logical operators.

// //usng and operator
// // let age = 19
// // if(age>=18){
// //    console.log("Go to vote on mangsir 29")
// // }else{
// // //  doNothing()
// // }
// // age>=18 && console.log("go to vote on mangsir 29")

// // using OR operator
// let firstName = "Tara"
// let lastName = "Khadka"
// let username

//displaying username on screen
// if(username){
//    document.write(`Welcome ${username}`)
// }
// else{
//    document.write(`Welcome ${firstName}${lastName}${Date.now()}`)
// }

//using or operator

// username = username || `${firstName}${lastName}${Date.now()}`
// document.write(`welcome ${username}`)

//Guard CLause using NOT operator
// if (!username) {
//    username = prompt("Please enter your username")
// }
// document.write(`welcome @${username}`)

// Q. WAP to check whether Nepal Mega BCA is opened or closed.
// conditioins:
//College Time: 10 to 17(While defining variable for it keep time in 24 hour format for simplicity)
// College is closed on weekend
//College is closed on holidays

// let date = new Date()
// console.log(date)
// let day = "sunday";
// let isSaturday = false;
// let time = 19;
// let holiday = false;

// if (time >= 10 && time <= 17 && !isSaturday && !holiday) {
//    console.log("Mega BCA is Opened");

// }
// else {
//    console.log("Mega BCA is Colsed");
// }

// if (time <= 10 || time >= 17 || isSaturday || holiday){
//    console.log("Closed")
// }
// else{
//    console.log("Open");
// }


// 5 Special Operators
// a. Ternary Operator: It is a short hand operator used inistead of If-Else statement. 
// example1. 
// let age = 18
// age >= 18 ? console.log("Your are eligible to vote") : console.log("you cannot vote")
// example 2
// let message = age>=18?"you can enter the club":"You can't enter the club";
// console.log(message)

// Nested Ternary Operator
// Syntax: condition?condition?"true Statement":"false statement":"statement if initial condition is false"
// example
// let message2=(age>=18)?(isFemale)?"Can get a free drink":"Can enter but no free drink":"Can't enter the club"
// console.log(message2)

// b. Nullish Coelscing Operator: IF LHS value or expression is null or undefined, the RHS will be executes. 
// let username;
// username??console.log("Please enter your username")
//c. Unary Operator: Those operators which can carry out operations on single operators are called unary operator. 

// i. Increment Operator(++): Increase the value by 1
//ii. Decrement Operator(--): Decrement the value by 1
//iii. Unary +

// let x="5";
// console.log(+x) //5 
// //iv. Unary - or Negotation Operator
// console.log(-x)
// //v. typeof Operator
// console.log(typeof NaN);

let x = 7;

// let y = ++x;
// console.log(x) //8
// console.log(y)//7




// HW. knowlese collision assignment operator ho does work