function convertToJs(str1,str2,str3){
   let obj = {}
   obj.name = str1
   obj.lastName = str2
   obj.hairColor = str3
   obj = JSON.stringify(obj)
   console.log(obj)
}

convertToJs("George", "Jones", "Brown")
//{"name":"George","lastName":"Jones","hairColor":"Brown"}