function songs(arr){
  
    class Song{
       constructor(typeList, name, time){
           this.typeList = typeList;
           this.name = name;
           this.time = time;
       }
    }

    let numSongs = Number(arr.shift())
    let typeToDisplay = arr.pop()

    for(let i=0; i<numSongs; i++){
       let [type, name, time] = arr[i].split("_")
       let song = new Song(type, name, time)
       if(type == typeToDisplay){
           console.log(song.name)
       }else if(typeToDisplay == 'all'){
           console.log(song.name)
       }
    }

}

songs([
    '4',
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
  ])
//Andalouse