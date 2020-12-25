function activationKey(arr){
    let key = arr.shift()

    for(let line of arr){
        if(line == 'Generate') break

        if(line.includes('Slice')){
           // 'Slice>>>2>>>6',
            let regex = /[A-Z][a-z]+>>>(?<startI>[0-9]+)>>>(?<endI>[0-9]+)/g;
            let match = regex.exec(line);
            if(match){
                let startI = Number(match.groups.startI)
                let endI = Number(match.groups.endI)
                let substr = key.substring(startI,endI)
                key  = key.replace(substr, '')
                console.log(key)
            }

        }else if(line.includes('Flip')){
            let regex = /[A-Z][a-z]+>>>(?<command>[A-Z][a-z]{4})>>>(?<startI>[0-9]+)>>>(?<endI>[0-9]+)/g;
            let match = regex.exec(line);
            if(match){
                let startI = Number(match.groups.startI)
                let endI = Number(match.groups.endI)
                let substr = key.substring(startI,endI)
                if(match.groups.command == 'Upper'){
                    key = key.replace(substr, substr.toUpperCase())
                   console.log(key)
                }else  if(match.groups.command == 'Lower'){
                    key = key.replace(substr, substr.toLowerCase())
                    console.log(key)
                }
            }

        }else if(line.includes('Contains')){
            let regex = /[A-Z][a-z]+>>>(?<contains>\w+)/g;
            let match = regex.exec(line)
            let result = match.groups.contains
            if(result){
                if(key.includes(result)){
                    console.log(`${key} contains ${result}`)
                }else{
                    console.log(`Substring not found!`)
                }
            }
        }
    }

    console.log(`Your activation key is: ${key} `)
}
activationKey([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ])
// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz