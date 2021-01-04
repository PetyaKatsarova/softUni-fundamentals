function addressBook(arr){
   let obj = {}
   for(let line of arr){
       let[name, street] = line.split(':')
       if(!obj.hasOwnProperty(name)){
           obj[name] = street
       }else{
        obj[name] = street
       }
   }
// sorted alphab by name
  Object.keys(obj).sort((a,b) => a.localeCompare(b))
                  .forEach(el => {
                      console.log(`${el} -> ${obj[el]}`)
                  })
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
  ])
//   Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing