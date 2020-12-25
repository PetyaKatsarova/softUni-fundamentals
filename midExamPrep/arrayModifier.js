function arrayModifier(arr){
   let result = arr.shift().split(' ').map(Number)

   for(let line of arr){
       if(line === 'end') break
       let[command, start,end] = line.split(' ')
       start = Number(start)
       end = Number(end)
       if(command == 'swap'){
           let temp = result[start]
            result[start] = result[end]
            result[end] = temp
       }else if(command == 'multiply'){
           result[start] = result[start] * result[end]
       }else if(command == 'decrease'){
           result = result.map(el => el -1)
       }
   }

   console.log(result.join(', '))
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
 // 86, 7382, 2369942, -124, 41, 89, -3
 console.log("-----------------------")
 arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])
 // 1, 11, 3, 0