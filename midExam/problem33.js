function problem33(arr){
   let sentence = arr.shift().split(' ')

   for(let line of arr){
       if(line == 'Stop') break
       let [command, a, b] = line.split(' ')
       if(command == 'Delete'){
           a = Number(a)
           if(a>=0 && a<sentence.length){
               sentence.splice(a+1, 1)
           }  
       }else if(command == 'Swap'){
           if(sentence.includes(a) && sentence.includes(b)){
               let temp = sentence[sentence.indexOf(a)]
               sentence[sentence.indexOf(a)] = sentence[sentence.indexOf(b)]
               sentence[sentence.indexOf(b)] = temp
           }
       }else if(command == 'Put'){
           if(Number(b) == sentence.length-1){
                sentence.splice(-1,0, a)
           }else if(Number(b) >= 0 && Number(b) < sentence.length){
               sentence.splice(Number(b)-1,0, a)
           }
       }else if(command == 'Sort'){
           sentence = sentence.sort((a,b) => b.localeCompare(a))
       }else if(command == 'Replace'){
           if(sentence.includes(b)){
              // sentence[sentence.indexOf(b)] = a
               sentence.splice(sentence.indexOf(b),1, a)
           }
       }
       
   }

   console.log(sentence.join(' '))
}

problem33([
    'Congratulations! You last also through the have challenge!',
   'Swap have last',
   'Replace made have',
  'Delete 2',
   'Put it 4',
   'Stop',
   ''
 ])
 //Congratulations! You made it through the last challenge!
console.log('--------------------------------')
problem33([
   'This the my quest! final',
   'Put is 2',
   'Swap final quest!',
   'Delete 2',
   'Stop',
   ''
 ])
// This is the final quest!