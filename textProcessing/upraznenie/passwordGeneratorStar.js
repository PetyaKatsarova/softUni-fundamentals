function passwordGeneratorStar(arr){
    let password = (arr.shift() + arr.shift()).split('')
    let codeW = arr.join('').split('');
    const vowels = 'aeoui'
    let result = []
    
        for(let i=0; i<password.length; i++){
           if(vowels.includes(password[i])){
                let ch = codeW.shift()
                result.push(ch.toUpperCase())
                codeW.push(ch)
           }else{
               result.push(password[i])
           }
    }

    console.log(`Your generated password is ${result.reverse().join('')}`);
}

passwordGeneratorStar(['ilovepizza', 'ihatevegetables', 'orange']);
// Your generated password is
