import { saveMovie, getWatchedMovies, } from "./module/movies.js";

let titleName = document.querySelector('#title');
let genre = document.querySelector('#genre');
let releaseDate = document.querySelector('#releaseDate');

let btnAddMovie = document.querySelector('#addMovie');
let btnShowMovies = document.querySelector('#showMovies');


btnAddMovie.addEventListener('click', () => {
    let movie = { title: titleName.value, genre: genre.value, relaseDate: releaseDate.value };
    saveMovie(movie);
});

btnShowMovies.addEventListener('click', () => {
    getWatchedMovies();
});