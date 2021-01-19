import React from 'react'
import { Link } from 'react-router-dom'

const MoviePage = props => {
    const almostTitle = props.greg.match.params.title
    const movieTitle = almostTitle.slice(1,almostTitle.lenght)
    const movieInfo = props.movieClicked
    if (!movieInfo) return <div><Link to='/'><h3 id='x'>X</h3></Link><h1>{movieTitle}</h1></div>
    const topTitlesFromStorage = JSON.parse(localStorage.getItem('myTopFive'))
    const topTitles = topTitlesFromStorage ? topTitlesFromStorage.map(movies => movies.Title) : []
    const year = parseInt(movieInfo.Year)
    return (
        <div>
            <Link to='/'><h3 id='x'>x</h3></Link>
            <h1>{movieTitle}</h1>
            {movieInfo.Poster !== 'N/A' ? <img src={movieInfo.Poster} alt={movieTitle}/> : null }
            <p>Year: {year}</p>
            { topTitles.includes(movieInfo.Title) ? <p id='favsButton' onClick={()=> props.removeFromFavs(movieInfo)}>Remove from Favs</p> : <p id='favsButton' onClick={() => props.addToFavs(movieInfo)}>Add to Favs</p> }
        </div>
    )
}

export default MoviePage
