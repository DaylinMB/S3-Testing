const movies = require("./data");

// Ejercicio 1: Obtener el array de todos los directores.
const getAllDirectors = (array) => {
  const directors = array.map((movie) => movie.director);

  return directors.slice();
};

// Ejercicio 2: Obtener las películas de un director en específico
const getMoviesFromDirector = (array, director) => {
  const moviesByDirector = array.filter((movie) => movie.director === director);

  return moviesByDirector;
};

const moviesByChristopherNolan = getMoviesFromDirector(movies, "Christopher Nolan");

// Ejercicio 3: Calcular el promedio de las películas de un director dado
const moviesAverageOfDirector = (array, director) => {
  const moviesByDirector = array.filter((movie) => movie.director === director);
  const totalScore = moviesByDirector.reduce((acc, movie) => acc + (movie.score || 0), 0);
  const averageScore = totalScore / moviesByDirector.length;

  return parseFloat(averageScore.toFixed(2));
};

const averageScoreNolan = moviesAverageOfDirector(movies, "Christopher Nolan");


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const newArray = array.slice();
  const alpha = newArray.sort((a, b) => a.title.localeCompare(b.title));
  const firstTwenty = alpha.slice(0, 20);
  const titles = firstTwenty.map((movie) => movie.title);
  
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const newArray = array.slice();
  const asc = newArray.sort((a,b) => a.year > b.year ? 1 : -1);

  return asc
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByCategory = array.filter(movie => movie.genre.includes(genre));
  
  if (moviesByCategory.length === 0) {
    return 0;
  }

  const totalScore = moviesByCategory.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / moviesByCategory.length;

  return parseFloat(averageScore.toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  // duration format: '2h 22min'
  const moviesDuration = []
  // Run all movies
  for(let i = 0; i < movies.length; i++) {
    // Create object for movie with new duration
    const newMovie = {}
    // Parse hours
    const hours = parseInt(movies[i].duration.split(' ')[0].slice(0, -1))
    // Parse minutes
    let minutes = 0;
    if(movies[i].duration.includes('min')) {
      minutes =  parseInt(movies[i].duration.split(' ')[1].slice(0, -3))
    }
    // Compute total minutes and sett value to movie with new format duration
    newMovie.duration = hours * 60 + minutes
    // Add movie with new format duration to result array
    moviesDuration.push(newMovie)
  }
  
  return moviesDuration;

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const filmsOfYear = movies.filter((movie) => movie.year === year);

  if (filmsOfYear.length === 0) {
    return null;
  }

 const bestFilm = filmsOfYear.reduce((best, current) => {
    return (current.score > best.score) ? current : best;
  });

 return  [bestFilm];
}
const bestMovie = bestFilmOfYear(movies, 1999);



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
