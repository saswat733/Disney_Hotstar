import React, { useLayoutEffect } from 'react'
import './trending.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTrending } from '../feature/movie/MovieSlice'

const Trending = () => {
    const movies=useSelector(selectTrending)
  return (
    <div className='recommended'>
    <div className="recommended-head">
      Hotstar's Trending
    </div>
    <div className="recommended-contents">
      {movies && movies.map((movie, key) => (
        <div className='recommended-content' key={key}>
          <Link to={`/detail/${movie.id}`}>
            <img src={movie.cardImg} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Trending