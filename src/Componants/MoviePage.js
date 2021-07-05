import React from 'react'
import { Link } from 'react-router-dom'

const MoviePage = props => {
    console.log("greg we love you", props.greg)
    const movieTitle = props.info.match.params.title.slice(1, props.info.match.params.title.length)
    const movieInfo = props.movieClicked
    if (!movieInfo) return <div><Link to='/'><h3 id='movieX'>X</h3></Link><h1>{movieTitle}</h1></div>
    const topTitlesFromStorage = JSON.parse(localStorage.getItem('myTopFive'))
    const topTitles = topTitlesFromStorage ? topTitlesFromStorage.map(movies => movies.Title) : []
    return (
        <div>
            <Link to='/'><h3 id='movieX'>x</h3></Link>
            <h1>{movieTitle}</h1>
            {movieInfo.Poster !== 'N/A' ? <img src={movieInfo.Poster} alt={movieTitle}/> : null }
            <p>Year: {parseInt(movieInfo.Year)}</p>
            { topTitles.includes(movieInfo.Title) ? <p id='favsButton' onClick={()=> props.removeFromFavs(movieInfo)}>Remove from Favs</p> : <p id='favsButton' onClick={() => props.addToFavs(movieInfo)}>Add to Favs</p> }
        </div>
    )
}

export default MoviePage
