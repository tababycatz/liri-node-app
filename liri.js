require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var arg1 = process.argv[2];
var arg2 = process.argv[3];

// OMDB movie-this function //
//Title
//Year
//IMDB Rating
//Rotten Tomatoes Rating
//Country produced
//Language
//Plot
//Actors
function movieThis(arg1) {
    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(function(response) {
    console.log(
    "Movie Title: " + response.data.Title, 
    "\nYear: " + response.data.Year,
    "\nIMDB Rating: " + response.data.imdbRating,
    "\nRotten Tomatoes Rating: " + response.data.Ratings[1],
    "\nCountry: " + response.data.Country,
    "\nLanguage: " + response.data.Language,
    "\nMovie Plot: " + response.data.Plot,
    "\nActors: " + response.data.Actors);
  });
}

//bands in town -- concert-this -- ask Samuel about this one//
fucntion concertThis(arg1) {
    axios.get("https://rest.bandsintown.com/artists/" + arg2 + "/events?app_id=codingbootcamp").then(function(response) {
        console.log(response.data)

}
})

//spotify -- spotify-this-song//
fucntion spotifyThisSong(arg1) {
    spotify.search({ type: 'track', query: process.argv[3]}).then(function(response) {
    
  console.log("works"); 
  });

//random.txt -- do-what-it-says//
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);

  var dataArray = data.split(",");
  console.log(dataArray);

});

// finish your function first in all variables, or just plain functions -- 4 functions//
// switch statements for all commands//

