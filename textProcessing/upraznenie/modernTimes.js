function modernTimes(str){
    // why we get only 60%?????????????????????????????????????
   let arr =str.split(' ');

    arr.forEach(word => {
        if(word[0] == '#' && word.length > 1){
            let isOnlyLetters = true;
            word = word.slice(1);
            for(const char of word){
                let ch = char.charCodeAt() ;
                if(ch < 65 && ch > 90 && ch > 122 && ch < 97){
                    isOnlyLetters = false;
                    break;
                }
            }

            if(isOnlyLetters){
                console.log(word);
            }
        }
    });

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
//special
//socialMedia