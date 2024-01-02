// chellange 1 complete chellange 2,3(using function)
//chellange2
function BMI(markHeight, markMass, johnHeight, johnMass) {
   let markBMI = markMass / (markHeight * markHeight)

   let johnBMI = johnMass / (johnHeight * johnHeight)

   let isMarkHigherBMI = markBMI > johnBMI;

   let message = isMarkHigherBMI ? (`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's! (${johnBMI.toFixed(1)})`) : (`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's! (${markBMI.toFixed(1)})`)
   console.log  (message)
   return message;
}
BMI(1.69, 78, 1.95, 92)


//chellange3
function average(dolphin1, dolphin2, dolphin3, koalas1, koalas2, koalas3) {
   let avgDolphin = (dolphin1 + dolphin2 + dolphin3) / 3
   let avgKolas = (koalas1 + koalas2 + koalas3) / 3
   if (avgDolphin === avgKolas) {
      let message = `Game Draw`
      message = (message)
      return message;
   }
   else if (avgDolphin >= 100 || avgKolas >= 100) {

      let message = avgDolphin > avgKolas ? `Dolphins winn the trophy` : `Kolas Winn the trophy`
      message = (message)
      return message
   }
   else {
      let message = "atleast one or both team have to make 100 or greater points to winn the trophy"
      message = (message)
      return message
   }

}
average(96, 108, 89, 88, 91, 110)

//check bca is open or close
function checkOpenClose(time, isSaturday, isHoliday) {
   if (time >= 10 && time <= 17 && !isSaturday && !isHoliday) {
      message = ("Mega BCA is Opened");

   }
   else {
      message = ("Mega BCA is Colsed");
   }
   console.log(message)
   return message
}
checkOpenClose(15, false, false)

//grade using function 
function grade(totalMarks, obtainMarks) {

   let percentage = (obtainMarks / totalMarks) * 100
   message = `${percentage} % `
   console.log(message)
   switch (true) {
      case (percentage >= 90 && percentage <= 100):
         message = `A+`
         break
      case (percentage >= 80 && percentage <= 90):
         message = `A`
         break
      case (percentage >= 70 && percentage <= 80):
         message = `B+`
         break
      case (percentage >= 60 && percentage <= 70):
         message = `B`
         break
      case (percentage >= 50 && percentage <= 60):
         message = `C`
         break
      case (percentage > 0 && percentage <= 50):
         message = `F`
         break
      default:
         message = `invalid number`

   }
   console.log(message)
   return message
}
grade(500, 460)