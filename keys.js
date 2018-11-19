console.log('<-----  loading environment variables/api keys  ----->');

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