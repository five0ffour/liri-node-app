# liri-node-app  

### Overview  
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a __Language__ Interpretation and Recognition Interface. LIRI is a __command line__ node app that takes in parameters, calls internet APIs and gives back parsed text data.
  
Command line syntax:   
        > node liri {concert-this|spotify-this-song|movie-this|do-what-it-says} {band|song|movie}  
Examples:  
        > node liri concert-this "ZZ Top"  
        > node liri spotify-this-song "The Windmills of Your Mind"  
        > node liri movie-this "Ex Machina"  
        > node liri do-what-it-says  
  
LIRI supports the follow commands and yields the corresponding content:
  
| Command           | Result                                       |
| ----------------- | -------------------------------------------- |
| spotify-this-song | Artist(s)                                    |
|                   | The song's name                              |
|                   | A preview link of the song from Spotify      |
|                   | The album that the song is from              |
| concert-this      | Name of the venue                            |
|                   | Venue location                               |
|                   | Date of the event                            |
| movie-this        | Title of the movie                           |
|                   | Year the movie came out                      |
|                   | IMDB Rating of the movie                     |
|                   | Rotten Tomatoes rating of the movie          |
|                   | Country where the movie was produced         |
|                   | Language of the movie                        |
|                   | Plot of the movie                            |
|                   | Actors in the movie                          |
| do-what-I-say     | Runs the commands found in file random.txt   |
| prompt-me         | Prompts the user through the commands to run |
   
Note:  
        LIRI doesn't like being stood up.  If you can't decide what movie or song to search,  LIRI will supply one for you  

### Demonstration of Functionality  

### Developer notes  
- **.env:**  environment variables used by dotenv package holding secret keys and passwords for API, not included in GIT
- **bandsInTown.js:** the API logic to query bandsintown API  
- **keys.js:**  Module exporting the client keys and passwords
- **liri.js:**  main entry point and command line interface  
- **omdb.js:**  logic to query the omdb movie api  
- **random.txt:**  comma delimited text file of actions and item pairs  
- **spotify.js:**  logic to query the Spotify API for songs   
  
- Spotify API can be found at:  https://developer.spotify.com/
- OMDB API can be found at: http://www.omdbapi.com/    
- BandsInTown API can be found at: https://manager.bandsintown.com/support/bandsintown-api
  
*All APIs require an email to get a registered key*  
  
### How to install/run the application  
  
### Technology Used  
- Node.js  
- Axios  
- Moment JS  
- Inquirer  
- npm Spotify  
- npm dotenv  
- Spotify API  
- BandsInTown API  
- OMDB API  
- Node fs  
 
## Authors  
Michael Galarneau - Initial work - five0ffour  
  
### Acknowledgements  
  