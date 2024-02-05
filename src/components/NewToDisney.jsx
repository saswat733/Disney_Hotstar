import React from 'react'
import './newtodisney.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../feature/movie/MovieSlice'

const NewToDisney = () => {
  const movies = useSelector(selectNewDisney)
    console.log(movies)
  return (
    <div className='recommended'>
      <div className="recommended-head">
        New to Disney+
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

export default NewToDisney
