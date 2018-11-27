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
  
|   | Command           | Result                                       |
|---| ----------------- | -------------------------------------------- |
|__1__| spotify-this-song | Artist(s)<br>The song's name<br>A preview link of the song from Spotify<br>The album that the song is from |
|__2__| concert-this      | Name of the venue<br>Venue location<br>Date of the event |
|__3__| movie-this        | Title of the movie<br>Year the movie came out<br>IMDB Rating of the movie<br>Rotten Tomatoes rating of the movie<br>Country where the movie was produced<br>Language of the movie<br>Plot of the movie<br>Actors in the movie |
|__4__| do-what-I-say     | Runs the commands found in file random.txt   |
|__5__| prompt-me         | Prompts the user through the commands to run |
   
__Note:__ LIRI doesn't like being stood up.  If you can't decide what movie or song to search,  LIRI will supply one for you  

### Demonstration of Functionality 

1) node liri spotify-this-song "Windmills of Your Mind""  
![node liri spotify-this-song "Windmills of Your Mind"](./assets/images/spotify-this-song-sample.PNG)
  
2) node liri movie-this "Ex Machina"  
![node liri movie-this "Ex Machina"](./assets/images/movie-this-sample.PNG)
  
3) node liri concert-this "ZZ Top"  
![node liri concert-this "ZZ Top"](./assets/images/concert-this-sample.PNG)

4) node liri do-what-it-says   
![node liri do-what-it-says](./assets/images/dowhatitsays-sample.PNG)
  
5) node liri prompt-me  
![node liri prompt-me](./assets/images/prompt-me-sample.PNG)
  
6) node liri [spotify-this-song|movie-this] {blank} 
![node liri [spotify-this-song|movie-this] <blank>](./assets/images/nochoice-samples.PNG)
  
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
  