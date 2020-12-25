function reception(arr){
  let questions = Number(arr.pop())
  let answersPerHr = arr.map(Number).reduce((acc, item) => acc + item, 0)
  let hrs = 0
  
  while(questions > 0){
    hrs++
    if(hrs % 4 != 0){
        questions = questions - answersPerHr
    }
  }

  console.log(`Time needed: ${hrs}h.`)
}
reception([ '5', '6', '4', '20' ])
//Time needed: 2h.
console.log('----------------')
reception([ '1', '2', '3', '45' ])
//Time needed: 10h.