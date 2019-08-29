var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: eb578643b2664d4796ff30a9432db6fd,
  secret: af5834a708b143ebb73feffd19050702
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});