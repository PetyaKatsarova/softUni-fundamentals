function problem1(arr){
   let price = Number(arr.shift())
   let months = Number(arr[0])
   let collectedMoney = 0
   for(let i=1; i<=months; i++){
       if(i !== 1 && i % 2 !== 0){
           collectedMoney = collectedMoney - collectedMoney * .16
       }
       if(i % 4 === 0 && i !== 0){
           collectedMoney += collectedMoney * .25
       }
       collectedMoney += price * .25
   }

   if((collectedMoney - price) >= 0){
       console.log(`Bravo! You can go to Disneyland and you will have ${(collectedMoney - price).toFixed(2)}lv. for souvenirs.`)
   }else{
       console.log(`Sorry. You need ${Math.abs(collectedMoney - price).toFixed(2)}lv. more.`)
   }
}

problem1([ '1000', '4' ])
//Bravo! You can go to Disneyland and you will have 87.50lv. for souvenirs.
console.log("--------------------------")
problem1([ '3265', '3' ])
//Sorry. You need 1077.45lv. more.