function pirates(arr){
    let cityInfo = {}
    //get the command lines
    let sail = arr.indexOf("Sail")
    let commands = arr.slice(sail+1)
  
    //create the cityinfo obj     //'Tortuga||345000||1250',
    for(let line of arr){
        if(line == 'Sail') break;
        // extract city gold population
        let [city, people, gold] = line.split('||')
        if(!cityInfo.hasOwnProperty(city)){
            cityInfo[city] = {people: 0, gold: 0}
        }
        cityInfo[city]['people'] += Number(people);
        cityInfo[city]['gold'] += Number(gold);
    }  
    // create the actions
    let action, city, people, gold

    for(let command of commands){
        if(command == 'End') break
        //Plunder=>Tortuga=>75000=>3800',
        if(command.includes('Plunder')){
            [action, city, people, gold] = command.split('=>')
            cityInfo[city].people -= Number(people)
                cityInfo[city].gold -= Number(gold)
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            if(cityInfo[city].gold == 0 || cityInfo[city]['people'] == 0){
                console.log(`${city} has been wiped off the map!`)
                delete cityInfo[city]
            }
        }else if(command.includes('Prosper')){
            [action, city, gold] = command.split('=>')
            if(Number(gold) < 0){
                console.log(`Gold added cannot be a negative number!`)
            }else{
                cityInfo[city]['gold'] += Number(gold)
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cityInfo[city]['gold']} gold.`)
            }
        }
    }
       const count = Object.keys(cityInfo).length
       console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)

       // sort the obj by gold in desc and after name in asc
       let result = Object.entries(cityInfo).sort((a,b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0])) 
       for(let arr of result){
          console.log(`${arr[0]} -> Population: ${arr[1].people} citizens, Gold: ${arr[1].gold} kg`)
       }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>3800',
    'Prosper=>Santo Domingo=>180',
    'End'
  ])
//   Tortuga plundered! 380 gold stolen, 75000 citizens killed.
//   180 gold added to the city treasury. Santo Domingo now has 810 gold.
//   Ahoy, Captain! There are 3 wealthy settlements to go to:
//   Havana -> Population: 410000 citizens, Gold: 1100 kg
//   Tortuga -> Population: 270000 citizens, Gold: 870 kg
//   Santo Domingo -> Population: 240000 citizens, Gold: 810 kg

 console.log('----             -----------------')
  pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ])
//   Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg
// San Juan -> Population: 930000 citizens, Gold: 1250 kg