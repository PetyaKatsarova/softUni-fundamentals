function matchFullName(arr){
   let str = arr.join(' ');
   let validNames = []
   let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
   let validName = null;
//    console.log(str.match(pattern))
//    console.log(str.match(pattern))
//    console.log(str.match(pattern))

   while((validName = pattern.exec(str)) !== null){
       validNames.push(validName);
   }

   console.log(validNames.join(' '));
}

matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ])
  //Ivan Ivanov Test Testov