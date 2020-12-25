function memoryGame(arr){
    let sequence = arr.shift().split(' ')
    let count = 0
    let move = arr.shift()

    while(move != 'end'){
        count++
        let[ind1, ind2] = move.split(' ').map(Number)
        if(ind1 < 0 || ind2 < 0 || ind1 >= sequence.length || ind2 >= sequence.length || ind1 === ind2){
            console.log(`Invalid input! Adding additional elements to the board`)
            sequence.splice(sequence.length/2, 0, `-${count}a`, `-${count}a`)
        }else{
            if(sequence[ind1] === sequence[ind2]){
                 console.log(`Congrats! You have found matching elements - ${sequence[ind1]}!`)
                 let el1 = sequence[ind1]
                 sequence.splice(ind1,1)
                 let newInd = sequence.indexOf(el1)
                 sequence.splice(newInd,1)
            }else{
                console.log(`Try again!`)
            }
        }
        if(sequence.length == 0){
            console.log(`You have won in ${count} turns!`)
            break
        }
        move = arr.shift()
    }
    if(sequence.length > 0){
        console.log(`Sorry you lose :(`)
        console.log(sequence.join(' '))
    }

}

memoryGame(['1 1 2 2 3 3 4 4 5 5 ', '1 0','-1 0','1 0 ', '1 0 ','1 0 ', 'end'])
//   Invalid input! Adding additional elements to the board
// Congrats! You have found matching elements - 2!
// Congrats! You have found matching elements - 3!
// Congrats! You have found matching elements - -2a!
// Sorry you lose :(
// 4 4 5 5
console.log("----------------------------------------")
memoryGame([ 'a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end' ])
// Congrats! You have found matching elements - a!
// Congrats! You have found matching elements - 2!
// Congrats! You have found matching elements - 4!
// You have won in 3 turns!