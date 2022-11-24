import React from 'react';
import { Grid } from '@mui/material';

import useStyle from './styles';
import { Movie } from '../index';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
	// console.log(movies);
	const classes = useStyle();
	const startFrom = excludeFirst ? 1 : 0;
	// console.log('movie list');
	return (
		<Grid container className={classes.moviesContainer}>
			{movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
				<Movie key={i} movie={movie} i={i} />
			))}
		</Grid>
	);
};

export default MovieList;
