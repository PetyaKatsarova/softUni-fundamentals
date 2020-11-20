function travelTime(arr){
  // create obj= {country: {'town': price, 'town': price}}
  let info = {}

  arr.forEach(el => {
     let[country,town,price] = el.split(' > ')
     if(info[country] === undefined) info[country] = {}
     if(info[country][town] === undefined){
         info[country][town] = price
         // compare same towns and keep only the one with least price
     }else if(info[country][town] > price) info[country][town] = price
  })
  console.log(info)

  // sort by country names alphabetically, second by lowest travel cost
    Object.entries(info).sort((a,b) => a[0].localeCompare(b[0]))
                        .map(el => [el[0], Object.entries(el[1]).sort((a,b) => a[1] - b[1])])

  // i dont understand how the towns in a country get printed on the same line when more than one!
                        .forEach(el => {
                              console.log(`${el[0]} -> ${el[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
                        })
}

travelTime([
  'Bulgaria > Sofia > 1000',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200'
]);
//Albania -> Tirana -> 1000 
// Bulgaria -> Sofia -> 200 Sopot -> 800 
// France -> Paris -> 2000