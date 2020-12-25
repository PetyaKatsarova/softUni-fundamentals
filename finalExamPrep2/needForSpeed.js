function needForSpeed(arr){
   let numCars = Number(arr.shift())
   let myCars = {}

   // create the mycars obj
   for(let i=0; i<numCars; i++){
       let[car, mileage, fuel] = arr[i].split('|')
       arr.shift(arr[i])
       myCars[car] = {'mileage': Number(mileage), 'fuel': Number(fuel)}
   }
   // destructure commands and perform them
    for(let line of arr){
        let[command, car, a, b] = line.split(' : ')
        
        if(command == 'Drive'){
            let myfuel = myCars[car].fuel
            if(myfuel < Number(b)){
                console.log(`Not enough fuel to make that ride.`)
            }else{
               myCars[car].mileage += Number(a) // a= mileage
               myCars[car].fuel -= Number(b)// b == fuel
               console.log(`${car} driven for ${Number(a)} kilometers. ${Number(b)} liters of fuel consumed.`)
               if(myCars[car].mileage >= 100000){
                   delete myCars[car]
                   console.log(`Time to sell the  ${car}!`)
               }
            }
        }else if(command == 'Refuel'){

            if(myCars[car].fuel + Number(a) > 75){
                myCars[car].fuel = 75
                let refill = 75 - myCars[car].fuel
                console.log(`${car} refueled with ${refil}`)
            }else{
                myCars[car].fuel += Number(a)
            }
        } else if(command == 'Revert'){
            
            //car: kms
            if(myCars[car].mileage - Number(a) < 10000){
                myCars[car].mileage = 10000
            }else{
                myCars[car].mileage -= Number(a)
            }
        }else if(command == 'Stop'){
            console.log(myCars)
        }
    
    }

   console.log(myCars)
}
// needForSpeed(['1',
// 'Audi A6|38000|62',
// 'Drive : Audi A6 : 700000 : 60'])

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )
//Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
console.log('------------------------------------')
// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ])
//   Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.