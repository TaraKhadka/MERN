let markHeight = 1.69
let markMass = 78


let johnHeight = 1.95
let johnMass = 92

let markBMI = markMass/(markHeight*markHeight)
let johnBMI = johnMass/(johnHeight*johnHeight)

let isMarkHigherBMI = markBMI>johnBMI;

// using if else 
// if(isMarkHigherBMI){
//    console.log("Mark BMI is higher")
// }
// else{
//    console.log("john BMI is higher")
// }

// using ternary operator

isMarkHigherBMI?console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's! (${johnBMI.toFixed(1)})`):console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's! (${markBMI.toFixed(1)})`)

//complete in 15 minute