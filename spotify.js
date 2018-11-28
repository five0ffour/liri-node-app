//---------------------------------------------------------------
// spotify.js - public function to query the Spotify Music API
//---------------------------------------------------------------

// Get the API Keys
var keys = require("./keys.js");
var logContent = require("./util.js");

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

    // Load spotify API
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    // Default to "The Sign" by Ace of Base if no song provided
    if (!song) {
        song = "\"The Sign\"";
    }
    else
        song = "\"" + song + "\"";

    // Execute the query as a promise
    spotify
        .search({
            type: 'track',
            query: song,
            limit: 10
        })
        .then(function (response) {
            parseSpotifyResponse(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}

//-------------------------------------------------------------------
// *private* function parseSpotifyResponse(data) 
//
// *This will show the following information about the song in the terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
function parseSpotifyResponse(data) {

    // Loop through the albums and write formatted responses to the console
    var items = data.tracks.items;
    items.forEach(item => {
        // Loop through each artist on the album and write it out
        var artists = item.artists;
        artists.forEach(artist => {
            logContent("Artist name:  " + artist.name);
        });

        console.log("Album name:  " + item.album.name);
        if (item.preview_url) {
            logContent("Preview Link:  " + item.preview_url);
        }

        logContent("------------------------------------");
    });
}

//------------------------------
// Export the public function
//------------------------------
module.exports = spotifyThisSong;
