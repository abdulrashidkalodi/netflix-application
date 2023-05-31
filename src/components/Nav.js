import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'


function Nav() {
    const [show,handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>600?handleShow(true):handleShow(false)
        })
    },[])

    console.log(show);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img 
      src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
      alt='netflix logo'
      className='logo'
      >

      </img>
    </div>
  )
}

export default Nav
