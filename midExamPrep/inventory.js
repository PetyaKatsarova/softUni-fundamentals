function inventory(arr){
    let items = arr.shift().split(', ')
    let command = arr.shift()

    while(command !== 'Craft!'){
        let[action, item] = command.split(' - ')

        if(action == 'Collect' && !items.includes(item)){
            items.push(item)
        }else if(action == 'Drop' && items.includes(item)){
            let index = items.indexOf(item)
            items.splice(index,1)
        }else if(action == 'Combine Items'){
            let[olditem, newitem] = item.split(':')
            if(items.includes(olditem)){
                let index = items.indexOf(olditem) + 1
                items.splice(index, 0, `${newitem}`)
            }
        }else if(action == 'Renew'){
            let index = items.indexOf(item)
            items.splice(index,1)
            items.push(item)
        }

        command = arr.shift()
    }

    console.log(items.join(', '))
}

inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])
//Iron, Sword, Gold
console.log("--------------------------------")
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron', 'Craft!'])
//Sword, Bow, Iron
