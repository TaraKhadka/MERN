let Dolphins1 = 100
let Dolphins2 = 110
let Dolphins3 = 100

let Koalas1 = 100
let Koalas2 = 100
let Koalas3 = 110

// let AverageDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3
// let AverageKoalas = (Koalas1 + Koalas2 + Koalas3) / 3
let AverageDolphins = (96+108+89)/3
let AverageKoalas = (88+91+110)/3

if (AverageDolphins === AverageKoalas) {
   console.log("Game Draw")
}
else if (AverageDolphins >= 100 || AverageKoalas >= 100){
   if (AverageDolphins > AverageKoalas) {
      console.log(`Dolphins Winn the trophy`)
   }
   else{
      console.log("Koalas Winn the trophy")
   }
}
else{
   console.log("atleast one or both team have to make 100 or greater points to winn the trophy")
}

//complete in 15+15 minute
