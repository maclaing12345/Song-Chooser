var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var position = getColumn(url,1);
var songName = getColumn(url,2)
var artists = getColumn(url,3)
var popularity = getColumn(url,4)
console.log(position)

var genres = [
"Pop",
"Rap",
"Rap",
"Pop",
"Rap",
"Rap",
"Pop",
"Pop",
"Pop",
"Pop",
"Pop",
"Pop",
"Pop",
"Country",
"Pop",
"Pop",
"Pop",
"Pop",
"Country",
"Pop",
"EDM",
"Rap",
"Rap",
"Rap",
"Country",
"Pop",
"Pop",
"Pop",
"Pop",
"Rap",
"Pop",
"Pop",
"Pop",
"Rap",
"Pop",
"Country",
"Rap",
"Country",
"Pop",
"Rap",
"Rap",
"Rap",
"Pop",
"Pop",
"Pop",
"Pop",
"Rap",
"Rap",
"Pop",
    

];

function setGenre(genre, page){
    console.log("hi")
    sessionStorage.setItem("Genre", genre);
    console.log(sessionStorage.getItem("Genre"));
    location.replace(page);
}

function setArtist(artist){
        sessionStorage(artist)
        location.replace(answer.html)
}

function getSongs(){
    for( var i = 0; i < artist.length; i++){
        if(artists[i] == artist ){
            arr.push(songName)
        }
    }
}





// function getGenre(){
//     var genre = sessionStorage.getItem("Genre");
//     var arr;
//     for(var i = 0; i< genres.length; i++){
//         if(genres[i] == genre){
//             arr.push(i);
//         }
//     }
// }




//function getArtists(genre){
//     var matches = [];
//     //loop through genres list
//         //if the genre at index i == the parameter
//             //push the corresponding artist name ti the list of matches
// }

// function getSong(artist){
//     var matches = [];
//     //loop through songs list
//     for(var i = 0; i < artist.length;i++){
//         if(artist[i] == "Taylor Swift"){}
      
//         }
        
    
//     //if the artist at index i == the parameter

//             //push the corresponding song name ti the list of matches
// }


// function rapArtists(){
//     if(answer=="Rap"){
//         location.replace("rap.html");

// }
//}