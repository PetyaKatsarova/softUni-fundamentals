function pascalCodeSplitter(str){
    let result = []
    let index = 0

    for(let i=1; i<str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            result.push(str.substring(index,i))
            index = i;
        }
    }
    result.push(str.substring(index, str.length))
    console.log(result.join(', '))
}

pascalCodeSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
//Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can














