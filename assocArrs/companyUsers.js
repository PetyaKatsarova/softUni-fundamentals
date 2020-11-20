function companyUsers(arr){
   // create obj = {'company': [id1, id2,...]}
   let obj = {}

   arr.forEach(el => {
       let [company, id] = el.split(' -> ')
       if(obj[company] === undefined) obj[company] = [];
       if(!obj[company].includes(id)){
           obj[company].push(id)
       }
   })

   let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))
     
   sorted.forEach(el => {
                           console.log(el[0])
                           el[1].forEach(id => {
                            console.log(`-- ${id}`)
                           })
                       })
}
companyUsers([
    'SoftUni -> CC12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
  ])
//HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345