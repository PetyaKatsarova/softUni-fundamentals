function numbers(str){
    str = str.split(' ').map(Number)
   let avg = str.reduce((acc, item) => acc + item, 0) 
    avg = avg / str.length
    let result = []

    for(let num of str){
       if(num > avg){
           result.push(num)
       }
    }

    if(result.length == 0){
        console.log('No')
    }else if(result.length <= 5){
        console.log(result.sort((a,b) => b - a).join(' '))
    }else{
        result = result.sort((a,b) => b- a)
        result.length = 5
        console.log(result.join(' '))
    }

}

numbers('10 20 30 40')
//50 40