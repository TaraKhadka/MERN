// Function: a function is basicaly a block of code that can execute a specific task. The value or action perform by a function can be achieved when we call or invoke a function. A function consist of a function name (to write function names we have to follow the rules of writing identifiers). A function contains a paranthesis where paremeters can be contained.

// There are 3 ways to declare function in javascript, They are:-
// 1. Function Declaration
// Syntax:
// function FuncName(){
//    code to be execute
// }
// eg:
// function Greetings() {
//    console.log("Hello World!");
// }
// Greetings();

// // There are major types of functions 
// // a) Unparameterized Function
// // b) Parameerized Function

// function sayHello(name) {
//    console.log(`Hello ${name}`);
// }
// sayHello("Ram")// Arguments ("Ram")
// sayHello("Tara")

// add(2, 3) // This is valid because functions with function declaration are hoisted. 
// function add(num1, num2) {
//    console.log(num1 + num2)
// }

// // Return Keyword: 

// console.log(add(5, 10))// undefined
// function calcAge(birthYear) {
//    let thisYear = 2024
//    let age = thisYear - birthYear
//    return age;
//    let outputStr = `You are ${age} years old. ` 
//    console.log(outputStr)
// }
// const myAge = calcAge(2002);


// function returnEg() {
//    return {
//       a: 1, b: 2
//    }
// }


// Question: 18 years old or above can vode and under 18 cannot vote 
// function vote(age){
//    let message;
//    if (age < 18) {
//       message = `you are not eligile for voting`
//       console.log(message)
//       return message
//    }
//    else{
//       message =`You are eligible for voting.` 
//       console.log(message)
//       return message;
//    }

// }
//  let age = vote(5)
//  let age2 = vote(19)

// //  alternative
// function vanVote(age){
//    let message = age>=18?`you are eligibel to vote`: `you are not eligibele to vote`
//    console.log(message)
//    return message
// }

// Qyestion
// create a function that return if you are/were or will be 16 years old. 
// function sixteen(years) {
//    let message
//    if(years===16){
//       message= "You were 16 yet."
//       console.log(message)
//       return message;
//    }
//    else if( years<16){
//       let after = 16-years
//       message =`you are 16 after ${after}`;
//       console.log(message)
//       return message
//    }
//    else{
//       let before = years-16
//       message = `you are 16 before ${before}`
//       console.log(message)
//       return message
//    }
// }

//  sixteen(11)

// ***************alternative*************** 

// function whenWillYouBe16(age){
//    if(age>16){
//       return `You were 16 ${age-16} years ago`
//    }
//    else if(age<16){
//       return `You will 16 after${16-age} years`
//    }
//    else{
//       return `you are 16`
//    }
// }
// console.log(whenWillYouBe16(17))
// console.log(whenWillYouBe16(16))
// console.log(whenWillYouBe16(18))

//******************* */ alternative using ternary operator
// function whenWillYouBe16(age){
//    let message = age<16?age>16?`You were 16 after ${16-age} years `:`You were 16  ${age-16}  years ago`:`you are 16`
//    return message;
// }
// console.log(whenWillYouBe16(16))

// 2. Function Expression
// syntax:
// variableTyple identifier = function(){
//     statements of the function
// }

// example
// var greetings = function(){
//    console.log(`hello world!`)
//    return 1
// }
// let valueReturn = greetings()
// console.log(greetings())

// const calcAge=function(dob){
//    let thisYear =2023
//    let age=thisYear - dob
//    return age
// }
// console.log(calcAge(2002))

// const whenWillYouBe16 = function (age) {
//    // if(age>16){
//    //    return`You were 16 ${age-16} yours ag0`
//    // }
//    // else if(age<16){
//    //    return `You will be 16 after ${16-age} years.`
//    // }
//    // else{
//    //    return `you are 16.`
//    // }
//    message = age >= 16 ? age > 16 ? `you were 16 ${age - 16} years ago` : `you are 16` : `You will be 16 after ${16 - age}`
//    // console.log(message)
//    return message
// }
// console.log(whenWillYouBe16(1))

// 3. Arrow Function (ES6+)
// syntax
// variableType identifier =() =>{}
//Kiss Principle -> Keep It short and SImple
// // if single statement is being executed, we dont need curly braces in arrow function 
// let greetings =()=> console.log(`Hello world!`) 
// greetings();   

//Q. Create an arrow function thar returns sum of two numbers

// const sum = (firstNumber, secondNumber) => {
//    let add = firstNumber + secondNumber
//    console.log(add)
//    return add

// }
// let checkOut = sum(2,2)
// console.log(checkOut);
// Q Creata an arrow function that return an string that says 'You are eligible to vot ' or you are not eligible to vote' based on passed age via argument. 


// const canVote = (age)=>{
//    let message = age>=18?`You are eligible to vot`:`You are not eligible to vote`
//    // console.log(message)
//    return message
// }
// let checkOut=canVote(18)
// console.log(checkOut)

// alternative 
// const canVote2 = age => age>=18?`You are eligibel to vot`:`YOu are not eligible to vot`
// console.log(canVote2(24))

// ****************************************************************************************************************
// let Dolphins1 = 100
// let Dolphins2 = 110
// let Dolphins3 = 100

// let Koalas1 = 100
// let Koalas2 = 100
// let Koalas3 = 110

// // let AverageDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3
// // let AverageKoalas = (Koalas1 + Koalas2 + Koalas3) / 3
// let AverageDolphins = (96+108+89)/3
// let AverageKoalas = (88+91+110)/3

// if (AverageDolphins === AverageKoalas) {
//    console.log("Game Draw")
// }
// else if (AverageDolphins >= 100 || AverageKoalas >= 100){
//    if (AverageDolphins > AverageKoalas) {
//       console.log(`Dolphins Winn the trophy`)
//    }
//    else{
//       console.log("Koalas Winn the trophy")
//    }
// }
// else{
//    console.log("atleast one or both team have to make 100 or greater points to winn the trophy")
// }
//*********************************************************************************************************************** */
//convert this into arrow function 
// const whoIsWinner = (team1, team2, team1score1, team1score2, team1score3, team2score1, team2score2, team2score3) => {
//    let team1Avg = (team1score1 + team1score2 + team1score3) / 3
//    let team2Avg = (team2score1 + team2score2 + team2score3) / 3

//    if (team1Avg > team2Avg && team1Avg >= 100) {
//       console.log(`${team1} has won the game`)
//    }
//    else if (team2Avg > team1Avg && team2Avg >= 100) {
//       console.log(`${team2} has won the game`)
//    }
//    else if (team1Avg === team2Avg && team1Avg>=100) {
//       console.log("both team draw")
//    }
//    else {
//       console.log(`No team win`)
//    }
// }

// whoIsWinner('Kathmandu', "Pokhara", 100, 100, 100, 100,101,100)


// const cutPieces = fruit => fruit * 4
// const juiceMaker = (apple, orange) => {
//    const applePieces = cutPieces(apple)
//    const orangePieces = cutPieces(orange)
//    let message = `Juice of ${applePieces}and juice of ${orangePieces}  is ready`
//    return message;
// }

// college open or close 
// const checkOpen = (time, isSaturday, isHoliday) => {
//    let message = time <= 10 || time >= 17 || isSaturday || isHoliday ? `College is closed` : `College Open`
//    console.log(message)
//    return message;
// }
// checkOpen(11,false,false);