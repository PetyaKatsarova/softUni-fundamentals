function phonebook(arr){
  let obj = {}

    for(let line of arr){
        let [name,num] = line.split(' ')
        obj[name] = num
    }

    for(let key in obj){
        console.log(`${key} -> ${obj[key]}`)
    }
}

phonebook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ])
//   Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112