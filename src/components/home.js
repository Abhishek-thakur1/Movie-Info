import React from 'react';



// config
import {  POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

// components
import HeroImage from './heroImage/heroImage.component';
import Grid from './grid/grid.component';
import Thumb from './thumb/thumb.component';
import Spinner from './spinner/spinner.component';
import SearchBar from './searchBar/searchBar.component';
import Button from './button/button.component';

// hooks
import { useMovieFetch } from '../hooks/useHomeFetch';

// images
import NoImage from '../images/no_image.jpg';



const Home = () => {
    const { state, loading, error, searchTerm,  setSearchTerm, setIsLoadingMore } = useMovieFetch();

    console.log(state);

    if(error) return <div>Something went wrong.....</div>

    return (
        <div>
            { state.results[0] ?  <HeroImage 
            image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}` }
            title={state.results[0].original_title}
            text={state.results[0].overview }
            /> : null }

            <SearchBar  setSearchTerm = { setSearchTerm } />

            <Grid header={ searchTerm ? 'Search Results' : 'Popular Movies'}>
                {
                        state.results.map(movie => (
                        <Thumb key={movie.id} 
                        clickable
                        image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                        movieId = {movie.id}
                        ></Thumb>
                    ))
                }
            </Grid>
            { loading &&  <Spinner />}
            { state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
            )}
        </div>
    );
};

export default Home;