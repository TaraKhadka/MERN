/* Data Type refers to what kind/ type of value a variable can hold or store. 
 Since js is dynamically type programing language the type of value hold by a variables. (eg x =2, x=nepal, x="nepal")
 in Javascript, there are two major classification of datatypes:-

 //1. Primitive data types: These data types hold a value directly within their variable and do not need to be referenced by aother object.
  

// 1. Number:-
let num1 = 19;
let num2 = 23.55;
console.log(typeof num1)
// 2. String:-
let firstName = 'Tara';
let LastName = "Khadka";
let firstletter = `t`// template literal
console.log(typeof firstName)

// 3. Boolean:-
let isMarried = true;
let hasChildren = false;
console.log(typeof isMarried)

// 4. Undefined:- If a variable is declare and value is not assiged at that time it holds undefined datatypes. 
let x; // undefined means the value assigned to it is not yet defined.
let lastName;
let nationality = undefined;
console.log(typeof lastname)

// 5. NULL:-
let age = null;
console.log(typeof age)


// 6. Symbol:- 
let id = Symbol(1);
let id2 = Symbol(1);
console.log(id === id2);// return false 
console.log(typeof id)

// 7. Bigint:- 
let largerNumber = 10n
console.log(typeof largerNumber);

*/
//  2. Non-Primitive data types(Reference Datatype):Thesw data types do not hold a value directly within their variable and need to be referenced by another object. (call stack | heap , identifier, adddress, value, || address, value)
// 1. Array
// let array1 = [2,3,4,5]
// console.log(array1)
// console.log(typeof x );

let arr1 =[1,2,3]
let arr2 = arr1;
arr2.push(4)
console.log(arr1)
console.log(arr2)

let arra =[1,2,3]
let arrb = [...arra]//Spread operator
arrb.push(4)
console.log(arra)
console.log(arrb)


// 2. Object
// let obj ={
//    // a:1,
//    // b:3
// }







