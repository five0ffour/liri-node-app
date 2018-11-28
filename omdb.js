// Export the public function
module.exports =  movieThis;

// Get the API Keys
var keys = require("./keys.js");
var logContent = require("./util.js");

//-----------------------------------------------------------------------
// *public* function movieThis() - OMDB API Query
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
            // Success -  log the JSON resposne from the site
            parseOMDBResponse(response.data);
        })
        .catch(function (error) {
            // Error - log an error based on its type
            if (error.response) {
                // The request was made and the server responded with a status codethat falls out of the range of 2xx
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


// *private* function parseOMDBResponse(data) 
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
function parseOMDBResponse(data) {

    logContent("Title: " + data.Title);
    logContent("Year: " + data.Year);

    // Loop, format and print the movie ratings
    var ratings = data.Ratings;
    ratings.forEach(rating => {
        switch (rating.Source) {
            case "Internet Movie Database":
                logContent("IMDB Rating: " + rating.Value);
                break;
            case "Rotten Tomatoes":
                logContent("Rotton Tomatoes Rating: " + rating.Value);
                break;
        }
    });

    logContent("Country Produced: " + data.Country);
    logContent("Language: " + data.Language);
    logContent("Plot: " + data.Plot);

    // Loop, format and print the actors on their own lines
    var actors = data.Actors.split(", ");
    logContent("Actors:");
    logContent("=======");
    actors.forEach(actor => {
        logContent("   " + actor);
    });
    logContent("------------------------------------");
}