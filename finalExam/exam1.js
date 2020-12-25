function username(arr){
   let name = arr.shift()

    for(let line of arr){
        if(line == 'Sign up') break
        if(line.includes('Case')){

           let bla = line.split(' ')[1]
           if(bla == 'lower'){
               name = name.toLowerCase()
           }else{
               name = name.toUpperCase()
           }
           console.log(name)
        }else if(line.includes("Reverse")){

            let[rvse, start,end] = line.split(' ')
            if(Number(start) >= 0 && Number(end) > 0){
                let reversed = name.split('').slice(Number(start), Number(end) - Number(start)+ 2).reverse().join('')
                console.log(reversed)
            }
        }else if(line.includes("Cut")){
 
            let[cut, substr] = line.split(' ')
            if(name.includes(substr)){
                let i = name.indexOf(substr)
                name = name.substring(0,i) + name.substring(i+substr.length)
                console.log(name)
            }else {
                console.log(`The word ${name} doesn't contain ${substr}.`)
            }
        }else if(line.includes("Replace")){

           let [replace, char] = line.split(' ')
           let i = name.indexOf(char)
           while(i != -1){
               name = name.substring(0, i) + '*' + name.substring(i + char.length)
               i = name.indexOf(char)
           }
           console.log(name)
        }else if(line.includes("Check")){

            let[check, char] = line.split(' ')
            if(name.includes(char)){
                console.log("Valid")
            }else{
                console.log(`Your username must contain ${char}.`)
            }
        }
      
   }
}
//username([ 'Peter', 'Replace e', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]) //
username(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up'])
//Isih
//Th*sIsMyStr*ng
//Th*sIsStr*ng

// peter
// The word peter doesn't contain ES.
// Your username must contain @.