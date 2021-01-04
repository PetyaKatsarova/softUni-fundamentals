function movies(arr){
  let movies = []

  for(let line of arr){
    let movie = {}
    if(line.includes('addMovie')){
      movie['name'] = line.substring(9)
      movies.push(movie)
    }else if(line.includes('directedBy')){
        let [name,director] = line.split(' directedBy ');
        movies.find(el => {
          if(el.name == name){
            el.director = director
          }
        })
        // let myMovie = movies.find(el => el.name == name)
        // if(myMovie) myMovie['director'] = director
    }else if(line.includes('onDate')){
      let [name, date] = line.split(' onDate ')
      movies.find(el => {
        if(el.name == name){
          el.date = date
        }
      })
    }
  }

  movies.forEach(m => {
    if(m.name && m.director && m.date){
      console.log(JSON.stringify(m))
    }
  })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ])
  //{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
//{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}