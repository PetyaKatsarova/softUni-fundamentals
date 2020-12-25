// i am stupid
function lift(arr){
   let pple = arr.shift()
   let wagons = arr[0].split(' ').map(Number)

   while(pple !== 0 && isSpace(wagons)){
       wagons = wagons.map(wagon => {
           let n = 4 - wagon
           if(n > pple){
               n = pple
           }
           pple = pple - n
           wagon = wagon + n
       })
   }
   console.log(pple)
   console.log(wagons)


   function isSpace(wagons){
       return wagons.filter(el => el < 4).length > 0
   }

}

//lift([ '20', '0 2 0' ])
//There isn't enough space! 10 people in a queue!
//4 4 4
console.log("-----------------------")
 lift([ '15', '0 0 0 0' ])
// The lift has empty spots!
// 4 4 4 3

