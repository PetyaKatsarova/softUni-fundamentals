function problem2(arr){
   let coffees = arr.shift().split(' ')
   let numOperations = Number(arr.shift())

   for(let line of arr){
       let[command, a, b] = line.split(' ')
       if(command == 'Include'){
           coffees.push(a)
       }else if(command == "Remove"){
           if(coffees.length >= Number(b)){
                if(a == 'first'){
                    coffees.splice(0, Number(b))
                }else if(a == 'last'){
                    coffees.splice(- 1, Number(b))
                }
           }
       }else if(command == 'Prefer'){
           if(coffees.length > Number(a) && coffees.length > Number(b)){
               let temp = coffees[Number(a)]
               coffees[Number(a)] = coffees[Number(b)]
               coffees[Number(b)] = temp
           }
       }else if(command == 'Reverse'){
           coffees = coffees.reverse()
       }
   }

   console.log(`Coffees:`)
   console.log(coffees.join(' '))
}

problem2([
    'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
    '5',
   // 'Include TurkishCoffee',
    'Remove first 2',
    'Remove last 1',
    // 'Prefer 3 1',
    // 'Reverse'
  ])
// Coffees:
// StrongCoffee Magnistipula Robusta BulkCoffee Charrieriana
console.log("---------------------------------")
problem2([
    'Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee',
    '5',
    'Include OrdinaryCoffee',
    'Remove first 1',
    'Prefer 0 1',
    'Prefer 3 1',
    'Reverse'
  ])
// Coffees:
// OrdinaryCoffee Robusta StrongCoffee TurkishCoffee BulkCoffee