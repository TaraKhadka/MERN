// switch case:
//The swich statement is used to perform diferent actions based on the values of a variable. 

//syntax:
// switch(value){
   //   case value1 : 
   //    statement to be executed if value1
   //    break
   //   case value2 : 
   //    statement to be executed if value2
   //    break
   //   case value3 : 
   //    statement to be executed if value3
   //    break
   //    .
   //    .
   //    .
   //    .
         
   //   case valuen : 
   //    statement to be executed if valuen
   //    break
   //    default:
   //    statement to be executed if no match found for any cases above
//}


// example1

// let currentLight ="GREEN"
// switch (currentLight) {
//    case 'GREEN':
//       console.log(`GO`)
//       break;
//    case 'YELLOW':
//       console.log(`WAIT`)
//       break;
//    case 'RED':
//       console.log(`STOP`)
//       break;
//    default:
//       console.log(`INVALID COLOR`)
// }

// example 2 Q. WAP using switch to find GPA
// 90-100->A+
// 80-90->A
// 70-80->B+
// 60-70->B
// 50-60->C
// F

let totalMarks =500
let obtainMarks = 6000

let percentage = (obtainMarks/totalMarks)*100
console.log(`${percentage}`)
switch(true){
   case (percentage>=90 && percentage<=100):
      console.log(`A+`)
      break
   case (percentage>=80 && percentage<=90):
      console.log(`A`)
      break
   case (percentage>=70 && percentage<=80):
      console.log(`B+`)
      break
   case (percentage>=60 && percentage<=70):
      console.log(`B`)
      break
   case (percentage>=50 && percentage<=60):
      console.log(`C`)
      break
   case (percentage>0 && percentage<=50):
      console.log(`F`)
   default:
      console.log(`invalid number`)
}
