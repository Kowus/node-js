var movies = require('./movies');

var marissasMovies = movies();

marissasMovies.favMovie = "Chef";
console.log("Marissa's favorite movie is: " + marissasMovies.favMovie);