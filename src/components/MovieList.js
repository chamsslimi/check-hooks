import React from 'react'
import MovieCard from './MovieCard';
function MovieList({movies,titre,rate}) {
  
  return (

    <div style={{height:'350px',display:'flex',
    justifyContent:'space-around',marginTop:'20px',
    flexWrap:'wrap'}}>
       {movies.filter((movie)=>
       movie.title.toLowerCase().trim().
       includes(titre.toLowerCase())&& movie.rate>=rate).
       map((movie,i) =>(<MovieCard movie={movie} key={i} />))}
  </ div> );
  }
  


export default MovieList;