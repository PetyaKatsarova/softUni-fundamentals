function password(arr){
  const count = Number(arr.shift())

  for(let i=0; i<count; i++){
    const regex = /([\w | \W]+)>(?<gr1>[0-9]{3})\|(?<gr2>[a-z]{3})\|(?<gr3>[A-Z]{3})\|(?<gr4>[^<>]{3})<\1/g
    let match = regex.exec(arr[i])
     if(!match){
        console.log("Try another password!")
    }else{
        console.log("Password: " + match.groups.gr1 + match.groups.gr2 + match.groups.gr3 + match.groups.gr4)
    }
   }
}

password([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ])
//   Try another password!
// Password: 123yesYES!!!
// Try another password!
console.log("------------------------")
password([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ])
//   Password: 111mquBAUmqu
// Try another password!
// Password: 088abcAAA***
// Try another password!
// Try another password!