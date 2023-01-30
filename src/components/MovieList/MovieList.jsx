import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    // Redux; Global state (array of objects)
    const movies = useSelector(store => store.movies);
    // Runs a saga function that matches up with the unique identifer 'FETCH_MOVIES'
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* Loop through the array and sending down each object into a component as a prop */}
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;