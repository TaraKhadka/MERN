// // Varaibles - They are very important concept in every programming language that are used to hold(store) data and maniulate them. 
// //Variales can store values and expressions 
// // Expressions are something that will eventually resolves to a value.
// //Javascript is Dynamically typed programming language

// //syntax
// //variable_type variable_name(idenfifier) =(assignment operator) value or expression
// //There are three ways to declare a variable in javascript . They are:-
// //1. var (Pre-ES6)
// //2. let (ES6+)
// //3. const (ES6+)

// //rules for identifier:
// //1. Identifiers should always start with (a-z, A-Z, _, $).
// //2. It shouldn't start with number or sspecial characters except(_, $)
// //3. They are case sensitive. It means x and X are two different variables. 
// //4. There shouldn't be space between the identifier. 

// //Standard Concension for identifier in JS. 
// //Variable names should be in camelCase. 
// //Variable name(identifier) must be descriptive and relevent to what kind of value it must hold(store)


// // JS is backward compatible programmig language.


// // var vs let vs const
// //var - 1. var is used to declare varible which value can or may change overtime in our program. 
// //      2. Variable declaration only is possible in var. 
// var name;//variable Assignment
// var name = "Tara";//value Assignment or initialization
// //      3. Varaible redeclaration is possible in var
// var name;
//          4. Variale declared with var are hoisted. 
//          5. var is fuction scope.



// //let - 1. let is used to declare varible which value can or may change overtime in our program.
// //      2. Variable declaration only is possible in let. 
// let name;//variable Assignment
// let name = "Tara";//value Assignment or initialization
// //      3. Varaible redeclaration is not possible in let
//         4. Variable Declarae with let are not hoisted. 
//         5. Let is block scoped



// //const - 1. It is used to declare constant variable. 
// //      2. Variable declaration only is not possible in const. 
// // const name;//invalid
// // const name = "Tara";//Valid
// //      3. Varaible redeclaration is not possible in const
//         4. variable declare with the const are not hoisted. 
//         5. Const is block scoped. 

// ******************************Day 2 **************************
// Hoisting-> It is the default behaviour of javascript which raise the variable declaared with var and function declaration to the top of its scope. 

// console.log(address)
// let address = "Kathmandu";
// console.log(address)


// Characteristics of variables in JavaScript
// 1. Mutablity
// 2. Scope

//Scope:- It is the region where the variable is declared. 
//There are two types of scoope in Javascript. 
// 1. Local Scope
// 2. Global Scope
   // a. Function Scope
   // b. Block Scope

//Block Statement

// if(true){
//    let x = 5;
//    console.log(x);
// }
// console.log(x);
// let y = "hello"
// function test(){
//    var y =10;
//    console.log(y);
// }
// test()
// console.log(y);