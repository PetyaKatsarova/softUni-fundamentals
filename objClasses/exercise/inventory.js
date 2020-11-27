function inventory(arr){
    let records = []

    arr.forEach(hero => {
        let objHero = {}
        let[name, level, items ] = hero.split(' / ')
        // sort items alphabetically
        items = items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ')
        objHero['Hero'] = name
        objHero['level'] = level
        objHero['items'] = items
        records.push(objHero)
    })

    arr.forEach(record => {
        for(let key of Object.keys(record)){
            console.log(key)
        }
     })

     //console.log(records)
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ])
//Hero: Hes
// level => 1
// items => Antara, Desolator, Sentinel
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun