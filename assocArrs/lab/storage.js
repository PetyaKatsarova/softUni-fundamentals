// using new Map()
function storage(arr){
  let map = new Map()

  for(let line of arr){
        let [product, quantity] = line.split(' ')
        quantity = Number(quantity)
        if(!map.has(product)){
            map.set(product,quantity)
        }else{
            let existing = map.get(product)
            map.set(product, existing + quantity)
        }
  }
  
  for(let [prod, qty] of map){
      console.log(`${prod} -> ${qty}`)
  }
}

storage([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ])
// tomatoes -> 10
// coffee -> 45
// olives -> 100
