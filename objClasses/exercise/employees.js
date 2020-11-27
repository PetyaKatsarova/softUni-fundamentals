function employees(arr){
  arr.forEach(line => {
     let obj = {}
     obj[line] = line.length;

     for(const key of Object.keys(obj)){
         console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
     }
     
  })

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ])
  //Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18