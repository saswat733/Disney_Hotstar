import React from 'react'
import './originals.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectOriginal } from '../feature/movie/MovieSlice'


const Originals = () => {
    const movies=useSelector(selectOriginal)
  return (
    <div className='recommended'>
      <div className="recommended-head">
        Hotstar's Originals
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

export default Originals