// Read and set environment variables using dotenv
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
// var fs = require("fs");

// Process Command from CLI
var action = process.argv[2];
var item = process.argv[3];
performAction(action, item);

// function performAction() - executes the specified command to query Spotify, OMDB or Bands-In-Town
//
function performAction(action, item) {

    switch (action) {
        case 'concert-this':
            concertThis(item);
            break;

        case 'spotify-this-song':
            spotifyThisSong(item);
            break;

        case 'movie-this':
            movieThis(item);
            break;

        case 'do-what-it-says':
            doWhatItSays();
            break;

        default:
            console.log("Usage: npm liri <concert-this|spotify-this-song|movie-this|do-what-it-says> <band|song|movie>");
            break;
    }
}

// function concertThis() - BandsInTown API Query
// 
//   This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
//   for an artist and render the following information about each event to the terminal:
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY")
function concertThis(concert) {

    
}

// function spotifyThisSong() - Spotify API Query
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

// function movieThis() - OMDB API Query
//
// This will output the following information to the terminal/bash window:
// 
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
// 
// * If the user doesn't type a movie in, the function will output data for the movie 'Mr. Nobody.'
// * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. 
// * You may use `trilogy`.
function movieThis(movie) {
    var axios = require('axios');
    var apikey = keys.omdb.apikey;
    var queryURLString = "";

    // Default to Mr. Nobody if we don't get a movie request
    if (!movie) {
        movie = "Mr. Nobody";
    }

    // Build the url string with the api key and movie title
    queryURLString = "http://www.omdbapi.com/?apikey=" + apikey + "&" + "t=" + movie;

    // The axios.get function takes in a URL and returns a promise
    axios
        .get(queryURLString)
        .then(function (response) {
            // If the axios was successful...
            // Then log the the JSON resposne from the site
            console.log(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

// function doWhatItSays() - FS file based interface
//
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// * Edit the text in random.txt to test out the feature for movie-this and concert-this.
function doWhatItSays() {

}