function matchPhoneNum([str]){
  const pattern = /[+]359([ -])2\1\d{3}\1\d{4}\b/g
  
  let matched = str.match(pattern)
  console.log(matched.join(', '))
}

matchPhoneNum([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])
//+359 2 222 2222, +359-2-222-2222