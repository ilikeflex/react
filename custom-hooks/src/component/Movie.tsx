import React from 'react';
import { MoviePropsType, MovieType } from './DataTypes';

import classes from './Movie.module.css';

const Movie = (props:MoviePropsType) => {

  return (
    <li className={classes.movie}>
      <h2>{props.detail.title}</h2>
      <h3>{props.detail.releaseDate.toString()}</h3>
      <p>{props.detail.openingText}</p>
    </li>
  );
};

export default Movie;
