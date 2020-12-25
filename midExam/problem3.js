function problem3(arr){
    let message = arr.shift().split(' ')

    for(let line of arr){
        if(line == 'Stop') break
        let [command, a, b] = line.split(' ')
        if(command == 'Delete'){
            message.splice(Number(a) + 1, 1)
        }else if(command == 'Swap'){
            if(message.includes(a) && message.includes(b)){
                let temp = message[message.indexOf(a)]
                message[message.indexOf(a)] = message[message.indexOf(b)]
                message[message.indexOf(b)] = temp
            }
        }else if(command == 'Put'){
            if(Number(b) > 0 && Number(b) < message.length-1){
                message.splice(Number(b)-1, 0, a)
            }else if(Number(b) == message.length){
                message.splice(-1, 0, a)
            }
        }else if(command == 'Sort'){
            message = message.sort((a,b) => b.localeCompare(a))
        }else if(command == 'Replace'){
            if(message.includes(b)){
                let i = message.indexOf(b)
                message[i] = a
            }
        }
    }

    console.log(message.join(' '))
}

problem3([
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
problem3([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
  ])
 // This is the final quest!