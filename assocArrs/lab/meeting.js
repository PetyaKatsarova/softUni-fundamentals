function meeting(arr){
  let meetings = {}

  for(let line of arr){
    let [day, person] = line.split(' ') 
    if(!meetings.hasOwnProperty(day)){
        console.log(`Scheduled for ${day}`)
        meetings[day] = person
    }else{
      console.log(`Conflict on ${day}!`)
    }
  }

  for(let key in meetings){
    console.log(`${key} -> ${meetings[key]}`)
  }
}

meeting([ 'Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim' ])
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim