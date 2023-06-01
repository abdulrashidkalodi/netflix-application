import React from 'react'
import instance from '../instance'
import Youtube from 'react-youtube'
import { useEffect } from 'react';
import { useState } from 'react';
import './Row.css';
import axios from '../instance';
import { APIKEY } from '../request';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState("")
   
     const base_url = "https://image.tmdb.org/t/p/original/";

    async function fetchMovies(){
        const request = await instance.get(fetchUrl)
        console.log(request.data.results);
        setMovies(request.data.results);
    }

    useEffect(()=>{
        fetchMovies()
    },[])


    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    }
    const handleMovie= (id)=>{
      console.log(id);
      axios.get(`/movie/${id}/videos?language=en-US&api_key=${APIKEY}`).then(response=>{
        if (response.data.results.length!==0) {
          setUrlId(response.data.results[0])
        } else {
          console.log("not found in youtube");
        }
      })
    }
  return (
    <div className='row'>
      <h4>{title}</h4>
      <div className='movies_row'>
          {
            movies.map((movie)=>(
                <img
                onClick={()=> handleMovie(movie.id)}
                className={`movie_poster ${isLargeRow && "movies_poster_large" }`}
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                alt={movie.name}
                />
            ))
          }
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default Row
