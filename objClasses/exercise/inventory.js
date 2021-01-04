function inventory(arr){
  let heroes = []

  for(let line of arr){
      let hero = {}
      let [name, level, items] = line.split(' / ')
      hero.name = name
      hero.level = Number(level)
      items = items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ') // sort alphabetically
      hero.items = items
      heroes.push(hero)
  }

  // sort the objects in the arr: asc by level 
  heroes.sort((a,b) => a.level - b.level)
        .forEach(hero => {
          console.log(`Hero: ${hero.name}`)
          console.log(`level => ${hero.level}`)
          console.log(`items => ${hero.items}`)
        })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ])
///Hero: Hes
// level => 1
// items => Antara, Desolator, Sentinel
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun