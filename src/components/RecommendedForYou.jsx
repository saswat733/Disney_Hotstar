import React from 'react'
import './recomendedforyou.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecommend } from '../feature/movie/MovieSlice'

const RecommendedForYou = () => {
  const movies = useSelector(selectRecommend)
  console.log(movies)

  return (
    <div className='recommended'>
      <div className="recommended-head">
        Recommended For You
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

export default RecommendedForYou
