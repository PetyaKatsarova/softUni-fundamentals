function emails(arr){
   let users = {}

   for(let line of arr){
       let [command, name, message] = line.split('->')
       if(command == 'Statistics') break
       if(command == 'Add'){

           if(users.hasOwnProperty(name)){
                console.log(`${name} is already registered`)
           }else{
            users[name] = ''
           }
       }else if(command == 'Send' && users.hasOwnProperty(name)){
          users[name] += message + ';'
       }
       else if(command == 'Delete'){

           if(users.hasOwnProperty(name)){
               delete users[name]
           }else{
               console.log(`${name} not found!`)
           }
       }
       
   }
   
   let count = Object.keys(users).length
   console.log(`Users count: ${count}`)
   for(let key of Object.keys(users)){
       console.log(key)
   }

let bla = Object.values(users).sort((a,b) => users[a] - users[b])
console.log(bla)
}

emails(['Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ])
//   Users count: 2
// George
//  - Hello World
//  - Some random test mail
//  - It would be a pleasure
// Mike
//  - Hello, do you want to meet up tomorrow?
//  - Another random test mail

console.log('-------------------------------------------')
// emails([
//     'Add->Mike',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Your loan is overdue',
//     'Add->Mike',
//     'Send->Mike->Hello, do you want to meet up tomorrow?',
//     'Delete->Peter',
//     "Send->George->I'm busy",
//     'Send->Mike->Another random test mail',
//     'Delete->George',
//     'Statistics'
//   ])
//   Mike is already registered
// Peter not found!
// Users count: 1
// Mike
//  - Hello, do you want to meet up tomorrow?
//  - Another random test mail
console.log('---------------------------------')

// emails([
//     'Add->Annie',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Annie->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Annie->Another random test mail',
//     'Delete->Annie',
//     'Delete->George',
//     'Statistics'
//   ])
 // Users count: 0