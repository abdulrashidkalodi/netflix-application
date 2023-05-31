import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import instance from '../instance';
import requests from '../request';
import './Banner.css'
function Banner() {
    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies]=useState([])
    async function fetchMovies(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovies(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]);
    }
    console.log(movies);
    useEffect(()=>{
        fetchMovies()
    },[])
    function truncate(str,n){
        return str?.length>n?str?.substr(0,n-1)+"...":str
    }

  return (
    <div
    className='banner'
    style={{
        backgroundImage:`url("${base_url}${movies?.backdrop_path}")`,
        backgroundPosition:"center",
        backgroundSize:"cover"
        }}
    >
        <div className='banner_content'>
            <h2 className='banner_title'>
                {movies?.name}
            </h2>
            <h2 className='banner_overview'>
                {truncate(movies?.overview,150)}
            </h2>
        </div>
      
    </div>
  )
}

export default Banner
