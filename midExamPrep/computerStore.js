function computerStore(arr){
    let sum = 0
    let type = arr.pop()

  for(let num of arr){
      num = Number(num)
      if(num < 0){
          console.log("Invalid price!")
          continue
      }else{
        sum += num
      }    
  }

  let taxed = sum * .2
  if(sum <= 0){
      console.log('Invalid order!')
  }else{
      console.log(`Congratulations you've just bought a new computer!`)
      console.log(`Price without taxes: ${sum.toFixed(2)}$`)
      console.log(`Taxes: ${taxed.toFixed(2)}$`)
      console.log('-----------')
      let discounted = (taxed + sum) - (taxed + sum) * .1
      if(type == 'special'){
        console.log(`Total price: ${(discounted).toFixed(2)}$`)
      }else{
        console.log(`Total price: ${(taxed + sum).toFixed(2)}$`)
      }
  }

}
computerStore([
    '1050',    '200',
    '450',     '2',
    '18.50',   '16.86',
    'special'
  ])

// Congratulations you've just bought a new computer!
// Price without taxes: 1737.36$
// Taxes: 347.47$
// -----------
// Total price: 1876.35$