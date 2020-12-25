function muOnline(str){
   str = str.split('|')
   let health = 100
   let coins = 0
   let count = 0

    for(let line of str){
        count++
        let[command, num] = line.split(' ')
        if(command == 'potion'){
            if(Number(num) + health > 100){
                num = 100 - health
                health = 100
            }else{
                health += Number(num)
            }
            console.log(`You healed for ${num} hp.`)
            console.log(`Current health: ${health} hp.`)
        }else if(command == 'chest'){
            coins += Number(num)
            console.log(`You found ${Number(num)} bitcoins.`)
        }else{
           // console.log(command)
            health = health - Number(num)
            if(health <= 0){
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${count}`)
                break
            }else{
                console.log(`You slayed ${command}.`)
            }
        }
   }

   if(health > 0){
       console.log(`You've made it!`)
       console.log(`Bitcoins: ${coins}`)
       console.log(`Health: ${health}`)
   }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
//You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6
console.log("-------------------------------------")
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
//You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65
