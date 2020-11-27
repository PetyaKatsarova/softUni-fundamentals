function movies(arr){
    let records = []

    arr.forEach(line => {
        let movies = {}
        if(line.includes('addMovie')){
            let movie = line.substring(9)
            movies['name'] = movie
        }else if(line.includes('directedBy')){
             let directed = line.split(' directedBy ')

             records.forEach(movie => {
                if(movie.hasOwnProperty(directed[0])){
                    movie['director'] = directed[1]
                    console.log(directed[1])
                 }
             })
        }
        if(movies.hasOwnProperty('name')) records.push(movies)
    });

  // console.log(records)
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