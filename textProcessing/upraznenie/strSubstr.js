function strSubstr(word, sentence){
   let arr = sentence.split(' ')
   let wordFound = false 

   for(let i=0; i<arr.length; i++){
        if(arr[i].toLowerCase() == word.toLowerCase()){
            console.log(word)
            wordFound = true;
            break;
        }
   }

   if(wordFound == false){
       console.log(`${word} not found!`)
   }
}

strSubstr('javascript',  'JavaScript is the best programming language')
//javascript