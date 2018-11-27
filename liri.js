/****************** */
/* GLOBAL VARIABLES */
/****************** */

// Read and set environment variables using dotenv
var dotenv = require("dotenv").config();
var keys = require("./keys.js");

//---------------------------------------------
// function main() - the entry point of the program.  Intended to allow for multiplue user interfaces to our interface.
//          CLI - command line interface 
//          Inquirer - prompt based interface (TBD)
function main() {

    // Process Command from CLI
    var action = process.argv[2];
    var item = process.argv[3];
    performAction(action, item);

    return (0);
}

//---------------------------------------------
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

        case 'prompt-me':
            promptMe();
            break;

        default:
            console.log("Usage: node liri <concert-this|spotify-this-song|movie-this|do-what-it-says|prompt-me> <band|song|movie>");
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
    // TODO:  Asynchronous reads may be causing squirrelly issues
    lineReader.on('line', function (line) {
        var cmdLine = line.split(",");
        var action = cmdLine[0];
        var item = cmdLine[1];
        performAction(action, item);
    });
}

//--------------------------------------------------------------------------
// function promptMe()
//
// Uses the Inquirer interface to prompt the user through the questions
function promptMe() {
    var inquirer = require("Inquirer");

    // Walk them through the various application options
    inquirer.prompt([{
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["spotify-this-song", "movie-this", "concert-this", "do-what-it-says"],
            default: "spotify-this-song"
        }, {
            when: function (result) {
                return (result.action !== "do-what-it-says");
            },
            name: 'item',
            message: "What to search for: "
        }])
        .then((result) => {
            // Execute the query using the resposnes from the first two questions
            var action = result.action;
            var item = result.item;
            performAction(action, item);
        });
}

//======= BEGIN MAIN() ========================================================================================

main();

//======= END MAIN() ==========================================================================================