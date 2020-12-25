function secretchat(arr){
    let message = arr.shift()
    for(let line of arr){
        if(line == 'Reveal'){
            console.log(`You have a new text message: ${message}`)
           break;
        }
        let [command, a, b] = line.split(':|:')
        if(command =='InsertSpace'){
            message = message.substring(0, a) + ' ' + message.substring(a)
            console.log(message)

        }else if(command =="Reverse"){
            if(message.includes(a)){
                let i = message.indexOf(a)
                let reversed = a.split('').reverse().join('')
                if(i>0){
                    message = message.substring(0,i) + message.substring(i + a.length) + reversed
                }else{
                    message = message.substring(i+a.length) + reversed
                }
                console.log(message)
            }else{
                console.log("error")
                continue
            } 

        }else if(command == "ChangeAll"){
            let i = message.indexOf(a)
            while(i != -1){
                message = message.substring(0, i) + b + message.substring(i + a.length)
                i = message.indexOf(a)
            }
            console.log(message)
        }
    }   
}

secretchat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
     'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])

// hellodar!gnil
// hellodarling!
// hello darling!
// You have a new text message: hello darling!