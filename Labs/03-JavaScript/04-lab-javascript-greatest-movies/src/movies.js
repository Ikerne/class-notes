// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectors = []
    for (let i = 0; i < moviesArray.length; i++){
     allDirectors.push(moviesArray[i].director);
    }
   return [...new Set(allDirectors)];
  };
  console.log(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let filteredMovies = moviesArray.filter( e => {
        return e.director === "Steven Spielberg" && e.genre.includes("Drama")});
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get average 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
        let scores = [];
    for (let i = 0; i < moviesArray.length; i++) {
        if (!moviesArray[i].score){
            scores.push(0);
        } else {
        scores.push(moviesArray[i].score);  
    }
}
    let scoresAverage = scores.reduce((a, b) =>  a + b)/scores.length;

    return Number(scoresAverage.toFixed(2));
}

//Second short version

    const scoresAverage2 = (moviesArray) => {
        if (!movies.length) return 0;
        const totalScore = moviesArray.reduce((accumulator, currentValue) => {
            if (currentValue.score) {
                return accumulator + currentValue.score;
            } else { 
                return accumulator
            }
        }, 0);
        return Number((totalScore/moviesArray.length)).toFixed(2);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter( e => {
        return e.genre.includes("Drama")});
    return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending 


//With sort the title if the year fails
function orderByYear(moviesArray) {
let sortedByYear = moviesArray.slice(0).sort((one, two) => {
    if (one.year > two.year) return one.year - two.year
    if (one.year < two.year) return one.year - two.year
    else return one.title.localeCompare(two.title);
  });
  return sortedByYear;
};
console.table(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((movie) => movie.title);
    let sortByTitle = movieTitles.sort((a, b) => a > b ? 1 : -1);
    return sortByTitle.slice(0,20);
}
console.log(orderAlphabetically(movies))

