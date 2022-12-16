//Delat upp pga koden ser renare ut samt lättare att hitta allt som har med firebase att göra

import { db, collection, addDoc, getDocs, deleteDoc, doc } from "./firebase.js";

let movieList = document.querySelector('#movieList');

export async function saveMovie(movie) {
    try {
        let existingMovies =  await getDocs(collection(db, 'movies'));
        let alreadyExists = false;
        existingMovies.forEach((m) => {
            if(m.data().title == movie.title)
                alreadyExists = true;
        });

        if(!alreadyExists) {
            await addDoc(collection(db, 'movies'), movie);
            await getWatchedMovies();
        }
    }catch (error){
        console.log(error);
    }
}

export async function getWatchedMovies() {
    try {
        const watchedMovies = await getDocs(collection(db, 'movies'));
        showWatchedMovies(watchedMovies);
    }catch (error) {
        console.log(error);
    }
}

async function deleteMovie(movieId) {
    try {
        await deleteDoc(doc(db, 'movies', movieId));
    } catch (error) {
        console.log(error);
    }
}

function showWatchedMovies(watchedMovies) {
    movieList.innerHTML = '';
    watchedMovies.forEach((movie) => {
        const movieData = `
            <article class="movie">
                <div>Title: ${movie.data().title}</div>
                <div>Genre: ${movie.data().genre}</div>
                <div>Release Date: ${movie.data().releaseDate}</div>
                <button class="removeMovieButton" data-id="${movie.id}">Remove</span>
            </article>`;
        movieList.insertAdjacentHTML('beforeend', movieData);
    });

    let removeButtons = document.querySelectorAll('.removeMovieButton');
    removeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let id = btn.getAttribute('data-id');
            deleteMovie(id);
            getWatchedMovies();
        });
    });
}