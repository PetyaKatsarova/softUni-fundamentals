// i am a genious :))

function lettersChangeNumbersStar(str){
   let sequence = str.split(' ');
   let results = []
      
    sequence.forEach(str => {
        let char = str.split('')
        results.push(helper(char))
    })

   function helper(char){
        let b4 = char.shift()
        let after = char.pop()
        let num = Number(char.join(''))
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let upperAlphabet = alphabet.map(letter => letter = letter.toUpperCase())
        let index;

        if(upperAlphabet.includes(b4)){
            index = upperAlphabet.indexOf(b4)
            num /= (index +1)
        }else if(alphabet.includes(b4)){
            index = alphabet.indexOf(b4)
            num *= (index + 1);
        }

        if(upperAlphabet.includes(after)){
            index = upperAlphabet.indexOf(after)
            num = num - (index + 1)
        }else if(alphabet.includes(after)){
            index = alphabet.indexOf(after)
            num = num + (index + 1)
        }
        return num
   }

   console.log(results.reduce((acc, item) => acc + item, 0).toFixed(2))
}

lettersChangeNumbersStar('A12b s17G'); 
//330.00
//lettersChangeNumbersStar('P34562Z q2576f H456z')