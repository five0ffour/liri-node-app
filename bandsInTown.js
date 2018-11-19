// Export the public function
module.exports =  concertThis;

// Get the API Keys
var keys = require("./keys.js");

//-----------------------------------------------------------------------
// *public* function concertThis() - BandsInTown API Query
// 
//   This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
//   for an artist 
function concertThis(artist) {

    var axios = require('axios');
    var appId = keys.bandsInTown.appId;
    var queryURLString = "";

    // Default to Ace of Base if we don't get a concert request
    if (!artist) {
        artist = "ZZ Top";
    }

    // Build the url string with the api key and movie title
    queryURLString = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + appId;

    // The axios.get function takes in a URL and returns a promise
    axios
        .get(queryURLString)
        .then(function (response) {
            // Success - log the the JSON response from the site
            parseBandsInTownResponse(response.data);
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

//----------------------------------------------------------------------
// *private* function parseBandsInTownResponse(data)
//      Read the axios response data and render the following information about each event to the terminal:
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY") 
function parseBandsInTownResponse(data) {
    var moment = require('moment');

    // Loop through the events and write formatted responses to the console
    data.forEach(event => {

        // Strip off the date from the event resposne and pass it to moment for formatting
        var eventDate = moment(event.datetime, "YYYY/MM/DD HH:mm:ss");

        // Format the location
        var venue = event.venue.city;
        if (event.venue.region) {
            venue += ", " + event.venue.region;
        }

        // Write the formatted response to the console
        console.log("Venue name:  " + event.venue.name);
        console.log("Location:  " + venue);
        console.log("Date:  " + eventDate.format("MM/DD/YYYY"));
        console.log("------------------------------------");
    });
}
