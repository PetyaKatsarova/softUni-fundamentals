function cuthalfAndReverse(str){
    let str1 = str.substring(0, Math.floor(str.length/2)).split('').reverse().join('')
    let str2 = str.substring(Math.floor(str.length/2)).split('').reverse().join('')
    console.log(str1)
    console.log(str2)
}

cuthalfAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
//ThisIsDifficult
//ThisIsSoAmazing