//======= BEGIN MAIN() ==========================================================================================

// Read and set environment variables using dotenv
var dotenv = require("dotenv").config();
var keys = require("./keys.js");

// Process Command from CLI
var action = process.argv[2];
var item = process.argv[3];
performAction(action, item);

return (0);

//======= END MAIN() ==========================================================================================

// function performAction() - executes the specified command to query Spotify, OMDB or Bands-In-Town
//      * concert-this <band/artist>
//      * spotify-this-song <song>
//      * movie-this <movie>
//      * do-what-it-says 
function performAction(action, item) {

    switch (action) {
        case 'concert-this':
            var concertThis = require("./bandsInTown.js");
            concertThis(item);
            break;

        case 'spotify-this-song':
            var spotifyThisSong = require("./spotify.js");
            spotifyThisSong(item);
            break;

        case 'movie-this':
            var movieThis = require("./omdb.js");
            movieThis(item);
            break;

        case 'do-what-it-says':
            doWhatItSays();
            break;

        default:
            console.log("Usage: node liri <concert-this|spotify-this-song|movie-this|do-what-it-says> <band|song|movie>");
            break;
    }
}


//-----------------------------------------------------------------------
// function doWhatItSays() - FS file based interface
//
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// * Edit the text in random.txt to test out the feature for movie-this and concert-this.
//
//  Note:  modified from specs to read multiple lines from text file and process asynchronously
function doWhatItSays() {
    var readline = require('readline');
    var fs = require('fs');
    
    // create an event handler to register lines input from random.txt
    var lineReader = readline.createInterface({
        input: fs.createReadStream('random.txt')
    });

    // event handle to process each line of the file, pass to action multiplexer
    lineReader.on('line', function (line) {
        var cmdLine = line.split(",");
        var action = cmdLine[0];
        var item = cmdLine[1];
        performAction(action, item);
    });
}