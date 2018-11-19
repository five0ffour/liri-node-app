// Export the public function
module.exports =  spotifyThisSong;

// Get the API Keys
var keys = require("./keys.js");

//-----------------------------------------------------------------------
// *public* function spotifyThisSong() - Spotify API Query
//
// * This will show the following information about the song in the terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//  If no song is provided then the function will default to "The Sign" by Ace of Base.
function spotifyThisSong(song) {
    // Load spotify 
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    // Default to "The Sign" by Ace of Base if no song provided
    if (!song) {
        song = "The Sign";
    }

    // Execute the query as a promise
    spotify
        .search({
            type: 'track',
            query: song
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}
