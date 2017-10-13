var movies = require('./movies');

var jessMovies = movies();
jessMovies.favMovie = "Go Go Sugarcane";
console.log("Jessica's favorite movie is: " + jessMovies.favMovie);