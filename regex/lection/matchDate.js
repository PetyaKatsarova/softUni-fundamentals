function matchDate([str]){
   let pattern = /\b(?<day>\d{2})([.\/\-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
   let validDate = null;
  //const pattern = /\b\d{2}([.\-\/])[A-Z][a-z]{2}\1\d{4}/g;
   //let result = str.match(pattern)

  // let result = pattern.exec(str) returns the groups too!!
    while((validDate = pattern.exec(str)) !== null){
        let day = validDate.groups['day']
        let month = validDate.groups['month']
        let year = validDate.groups['year']
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}

matchDate(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'])
// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937