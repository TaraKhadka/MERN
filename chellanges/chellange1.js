let markHeight = 1.69
let markMass = 78


let johnHeight = 1.95
let johnMass = 92

let markBMI = markMass / (markHeight * markHeight)
let johnBMI = johnMass / (johnHeight ** 2)

// let isMarkHigherBMI = true;
let IsMarkHigherBMI = markBMI>johnBMI

if (isMarkHigherBMI) {
   console.log("Mark BMI is higher")
}
else {
   console.log("john BMI is higher")

}
// chellange 2 
isMarkHigherBMI?console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's! (${johnBMI.toFixed(1)})`):console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's! (${markBMI.toFixed(1)})`)