function minerTask(arr){
    let obj = {}
    for(let i=0; i<arr.length; i+=2){
        let metal = arr[i]
        let quantity = arr[i+1]
        
        if(obj[metal] === undefined) obj[metal] = 0
        obj[metal] += Number(quantity)
    }

    for(const key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`)
    }
}

minerTask([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
  ])
// gold -> 170
// silver -> 10
// copper -> 17