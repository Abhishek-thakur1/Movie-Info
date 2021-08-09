import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import Breadcrumb from './breadCrumb/component';
import Grid from './grid/grid.component';
import Spinner from './spinner/spinner.component';
import MovieInfo from './movieInfo/movieInfo.component';
import MovieInfoBar from './movieInfoBar/component';
import Actor from './actor/actor.component';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    return(
        <>
            <Breadcrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actors.map(actor =>(
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;