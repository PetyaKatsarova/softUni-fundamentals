function garage(arr){
    let result = []

    arr.forEach(car => {
        let obj = {}
       let line = car.split(' - ')
       let garageNum = line.shift()
       let carInfo = line.join(' ').split(', ')
       if(!obj.garage){
        obj.garage = garageNum
       }
       result.push(obj)
       //console.log(obj)
   });
   console.log(result)
}

garage(['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat' ])
//Garage № 1
// --- color - blue, fuel type - diesel
// --- color - red, manufacture - Audi
// Garage № 2
// --- fuel type - petrol
// Garage № 4
// --- color - dark blue, fuel type - diesel, manufacture - Fiat