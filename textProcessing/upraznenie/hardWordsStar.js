function hardWords(arr){
    let letter = arr.shift().split(' ')

    for(let i=0; i<letter.length; i++){
        if((letter[i].endsWith('.') || letter[i].endsWith(',')) && letter[i].includes('_')){
            letter[i] = letter[i].slice(0,letter[i].length-1)
            console.log(letter[i])
        } 
        arr[0].forEach(word => {
            if(letter[i].includes('_') && letter[i].length === word.length){
                letter[i] = words
            }
        });
    }
   console.log(letter.join(' '))
}

hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    [
      'pie',
      'bring',
      'glad',
      'During',
      'amazing',
      'pharmacist',
      'sprained'
    ]
  ])
  //Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. My dad bought me a sled. 
  //Mom started a new job as a pharmacist. My brother's ankle is sprained, and now it bothers me even more. Every night Mom cooks
  // pie on your recipe because it is the most delicious. I hope this year Santa will bring me a robot.