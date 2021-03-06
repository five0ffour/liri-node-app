//--------------------------------------------
// keys.js - secret keys for the API calls
//         - environment variables are set via the require("dotenv").config() call
//--------------------------------------------

//  console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    apikey: process.env.OMDB_API_KEY
}

exports.bandsInTown = {
    appId: process.env.BANDSINTOWN_APP_ID
}