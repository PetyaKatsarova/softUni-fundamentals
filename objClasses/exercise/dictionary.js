function makeDictionary(arr){
    let dict = {}

    arr.forEach(line => {
        line = JSON.parse(line)
        let arr = Object.entries(line)
         let term = arr[0][0]
         let definition = arr[0][1]
         dict[term] = definition
    })

    // sort the obj
    Object.entries(dict)
           .sort((a,b) => a[0].localeCompare(b[0]))
           .forEach(e => {
               console.log(`Term: ${e[0]} => Definition: ${e[1]}`)
           })
}


makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"pupi lala."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ])
//   Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
//   Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
//   Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
//   Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
//   Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.