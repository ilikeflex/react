import React from 'react';
import { MovieListPropsType, MovieType } from './DataTypes';
import Movie from './Movie';


import classes from './MoviesList.module.css';

const MovieList = (props:MovieListPropsType) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie:MovieType) => (
        <Movie detail={movie}/>
      ))}
    </ul>
  );
};

export default MovieList;
