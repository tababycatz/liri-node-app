require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var arg1 = process.argv[2];
var arg2 = process.argv[3];


//omdb -- movie-this//
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(function(response) {
    console.log("Here is your movie information: " + response.data.imdbRating);
  });

//bands in town -- concert-this//
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
    console.log(response.data)
})

//spotify -- spotify-this-song//
spotify.search({ type: 'track', query: process.argv[3]}).then(function(response) {
    if (err) {
      return console.log(err);
    }
   
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
