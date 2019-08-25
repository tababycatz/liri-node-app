require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//omdb -- movie-this//
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  });

//bands in town -- concert-this//
var artist = process.argv[3]
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
    console.log(response.data)
})

//spotify -- spotify-this-song//
spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

//random.txt -- do-what-it-says//

