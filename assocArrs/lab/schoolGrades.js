// using Map()
function schoolGrades(arr){
    let map = new Map();

    for(let line of arr){
        line = line.split(' ')
        let name = line.shift()
        let grades = line.map(Number)
        if(!map.has(name)){
            map.set(name,grades)
        }else{
            let current = map.get(name)
            for(let grade of grades){
                current.push(grade)
            }
        }
    }

    // sort the map by avg grade
    
   let sorting = Array.from(map.entries()).reduce((acc, item) => )
}

schoolGrades([ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ])
// Tammy: 2, 4, 3
// Lilly: 4, 6, 6, 5
// Tim: 5, 6, 6, 6