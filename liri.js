require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify)
var bandsInTown = 

spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });