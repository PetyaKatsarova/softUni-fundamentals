function arenaTier(arr){
  //obj = {name: {skill: num}, name: {skill: num}}
  let result = {}
  
  for(let el of arr){
    //let obj = {}
    if(el === "Ave Cesar") break;
    let[name, skill, num] = el.split(' -> ')
    if(result[name] === undefined) result[name] = {}
    if(result[name][skill] === undefined) result[name][skill] = 0
    result[name][skill] += Number(num) 
    
  }

  console.log(result)
}
arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    //'Pesho -> BattleCry -> 400',
    'Ave Cesar'
  ])
  //Stamat: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Pesho: 400 skill
// - BattleCry <!> 400
// Gosho: 300 skill
// - PowerPunch <!> 300
