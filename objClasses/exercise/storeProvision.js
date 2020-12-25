// function storeProvisions(stock, orderedDelivery){
//     let records = {}
   
//     for(let i=0; i<stock.length; i+=2){
//         let name = stock[i]
//         let quantity = Number(stock[i+1])
//        records[name] = quantity
//     }

//     for(let i=0; i<orderedDelivery.length; i+=2){
//         let name = orderedDelivery[i]
//         let quantity = Number(orderedDelivery[i+1])
//         if(records[name] == undefined){
//             records[name] = quantity
//         }else{
//             records[name] += quantity
//         }
//     }

//      for(const key of Object.keys(records)){
//          console.log(`${key} -> ${records[key]}`)
//      }
// }

storeProvisions([
    'Chips',    '5',
    'CocaCola', '9',
    'Bananas',  '14',
    'Pasta',    '4',
    'Beer',     '2'
  ], [
    'Flour',    '44',
    'Oil',      '12',
    'Pasta',    '7',
    'Tomatoes', '70',
    'Bananas',  '30'
  ])
//Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70