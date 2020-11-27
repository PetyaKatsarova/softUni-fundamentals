function cats(arr){

    class Cat{
      constructor(name,age){
          this.name = name;
          this.age = age;
          this.meow = () => {console.log(`${this.name}, age ${this.age} says Meow`)}
      }

    //   meow(){
    //       console.log(`${this.name}, age ${this.age} says Meow`)
    //   }
    }

   arr.forEach(line => {
       let [cat, age] = line.split(' ')
       let miao = new Cat(cat, age)
       miao.meow()
   })
 
}

cats([ 'Mellow 2', 'Tom 5' ])
//Mellow, age 2 says Meow
//Tom, age 5 says Meow

// class Person{
//     constructor(name, age, bla,salary){
//         this.name = name;
//         this.age = age;
//         this.bla = bla;

//         if(this.salary == undefined){
//             this.salary = 12000;
//         }
//     }

//     sayHi(){
//         console.log('Greetings from ' + this.name)
//     }
// }

// const me = new Person('Petya', 21, 'kuku')
// console.log(me)
// me.sayHi()