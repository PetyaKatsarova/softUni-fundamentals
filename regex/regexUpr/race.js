function race(arr){
    let names = arr.shift().split(', ')
    let racers = {}

    for(const name of names){
        racers[name] = 0
    }
    
    for(let line of arr){
        const regexName = /[A-Za-z]/g
        let nameMatch = line.match(regexName).join('')
        let regexKms = /[0-9]/g      

        if(racers.hasOwnProperty(nameMatch)){
            let kmsMatch = line.match(regexKms).map(Number).reduce((a,b) => a+b)    
            racers[nameMatch] += kmsMatch
        
        }
      
    }

    let result = Object.keys(racers).sort((a,b) => racers[b] - racers[a])
    console.log(`1st place: ${result[0]}`)
    console.log(`2nd place: ${result[1]}`)
    console.log(`3rdst place: ${result[2]}`)
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ])
//   1st place: George
// 2nd place: Peter
// 3rd place: Tom