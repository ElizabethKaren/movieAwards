import React from 'react'
import { Link } from 'react-router-dom'

const MoviePage = props => {
    const almostTitle = props.greg.match.params.title
    const movieTitle = almostTitle.slice(1,almostTitle.lenght)
    const movieInfo = props.movieClicked
    if (!movieInfo) return <div><Link to='/'><h3>X</h3></Link><h1>{movieTitle}</h1></div>
    return (
        <div>
            <Link to='/'><h3>X</h3></Link>
            <h1>{movieTitle}</h1>
            {movieInfo.Poster ? <img src={movieInfo.Poster} alt={movieTitle}/> : null }
            <p>Type: {movieInfo.Type}</p>
            <p>Year: {movieInfo.Year}</p>
        </div>
    )
}

export default MoviePage