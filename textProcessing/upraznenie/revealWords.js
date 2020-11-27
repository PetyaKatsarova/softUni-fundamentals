function revealWords(words, sentence){
   words = words.split(', ')
   // if u want to remove the , do words.split(', '), otherwise counts it 6 not 5 length

   for(const word of words){
       let starsStr = '*'.repeat(word.length)
       sentence = sentence.replace(starsStr, word)
   }

   console.log(sentence)
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
//softuni is great place for learning new programming languages
