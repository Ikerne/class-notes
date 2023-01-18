

//Iteration 0: Movies array

/*  
The best way to practice is to work with real data. In the src/data.js file, you will find an array of info about the best 250 movies of all times according to IMDB Ranking that you will use to display what each iteration asks!

Here is an example of how the data is displayed:

{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score": 9.3
}
You will be digging deeper into some "facts" that this data set has. For example, we can use this data set to find which is the most popular movie, what is the average duration of the movie, the list of movies by some director, etc.

In this iteration, no action is required, but here comes your challenge: In the following iterations, you will use your JS knowledge to manipulate this data.

Remember to read each iteration description carefully before working on the solution.
*/

// Iteration 1: All directors? - Get the array of all directors.
/*
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director);
 }
 let directors = getAllDirectors (movies)
 let directorsFiltered = directors.filter((director, index) => directors.indexOf(director)=== index);

 console.log(directors);
 console.table(directorsFiltered);

*/

function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director);
 }
    let directors = getAllDirectors (movies)
    let directorsFiltered = directors.filter((director,index) => directors.indexOf(director) === index);

    console.log(directors);
    console.log(directorsFiltered);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
