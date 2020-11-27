/// gives error in JSON.parse(str)

function convertToObj(str){
   let obj = JSON.parse(str)
   for(const key of Object.keys(obj)){
       console.log(`${key}: ${obj[key]}`)
   }
}

convertToObj({"name": "George", "age": 40, "town": "Sofia"})
//name: George
// age: 40
// town: Sofia