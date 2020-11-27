function countStrOccurances(text, word){
   text = text.split(' ')
   let counter = 0

   for(const w of text){
      if(w === word){
          counter++
      }
   }
   console.log(counter)
}

countStrOccurances('This is a word and it is also a sentence', 'is')