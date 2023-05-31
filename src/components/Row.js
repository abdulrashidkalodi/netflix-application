import React from 'react'
import instance from '../instance'
import { useEffect } from 'react';
import { useState } from 'react';
import './Row.css';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
     const base_url = "https://image.tmdb.org/t/p/original/";

    async function fetchMovies(){
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results);
    }

    useEffect(()=>{
        fetchMovies()
    },[])


  return (
    <div className='row'>
      <h4>{title}</h4>
      <div className='movies_row'>
          {
            movies.map((movie)=>(
                <img
                className={`movie_poster ${isLargeRow && "movies_poster_large" }`}
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                alt={movie.name}
                />
            ))
          }
      </div>
    </div>
  )
}

export default Row
