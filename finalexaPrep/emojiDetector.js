function emojiDetector(arr){
   let text = arr[0]
   let count = 0
   let coolEmojis = ''

   // calculate cool threshold
   let regexNum = /\d/g
   let matchNum = text.match(regexNum)
   let cool = matchNum.map(Number).reduce((a,b) => a*b, 1)
   // find all the valid emojis and
   let emojiRegex = /(::|\*\*)[A-Z][a-z]{2,}\1/g
   let matchEmogi = text.match(emojiRegex)

    for(let emoji of matchEmogi){  
         // count them
        let sum = 0;
        
        if(emoji){
            // sum all letters in the emoji by ascii code
            let letters = emoji.slice(2,-2)
            count++

            for (let i = 0; i < letters.length; i++) {
                sum += letters.charCodeAt(i)
            }
            if(sum > cool){
                coolEmojis += `${emoji}\n`
                
            }

        }
    }

    console.log(`Cool threshold: ${cool}`)
    console.log(`${count} emojis found in the text. The cool ones are:`)
    if(coolEmojis){
        console.log(`${coolEmojis}`)
    }

}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ])
//emojiDetector(['5,4,3,2,1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'])

//   Cool threshold: 540
//   4 emojis found in the text. The cool ones are:
//   ::Smiley:: 
//   **Tigers** 
//   ::Mooning::

emojiDetector(['1,9,8,99,3 **English**']) // 17469 threshold