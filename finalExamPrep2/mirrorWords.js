function mirrorWords([str]){
//find the hidden words pairs: 
   const regex = /([@|#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g
   let matched = str.match(regex)
   let result = []
   if(matched){
        for(let i=0; i<matched.length; i++){
            let pair = []
            let first = matched[i].substring(0, matched[i].length/2)
            let second = matched[i].substring(matched[i].length/2).split('').reverse().join('')
            if(first == second){
                pair.push(first.substring(1, first.length -1),second.split('').reverse().join('').substring(1,second.length-1))
                result.push(pair)
            }
        }
   }
   if(!matched){
    console.log(`No word pairs found!`)
   } else{
    console.log(`${matched.length} word pairs found!`)
   }
    let printResult = `The mirror words are: \n`

    if(result.length == 0){
        console.log(`No mirror words!`)
    }else{
        for(const pair of result){
            printResult += `${pair[0]} <=> ${pair[1]}, `
        }
        console.log(printResult.substring(0, printResult.length-2))
    }

}

mirrorWords(['po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
//2 word pairs found!
// //No mirror words!
 console.log('--------------------------------------------')
 mirrorWords([
     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
   ])
// //   5 word pairs found!
// // The mirror words are:
// // Part <=> traP, leveL <=> Level, sAw <=> wAs
 console.log('----------------')
 mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
// No word pairs found!
// No mirror words!
