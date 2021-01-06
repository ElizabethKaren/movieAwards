import React from 'react'
import { Link } from 'react-router-dom'

const MoviePage = props => {
    const almostTitle = props.greg.match.params.title
    const movieTitle = almostTitle.slice(1,almostTitle.lenght)
    const movieInfo = props.movieClicked
    console.log(props.myTopFive)
    console.log(movieInfo)
    if (!movieInfo) return <div><Link to='/'><h3 id='x'>X</h3></Link><h1>{movieTitle}</h1></div>
    return (
        <div>
            <Link to='/'><h3 id='x'>X</h3></Link>
            <h1>{movieTitle}</h1>
            {movieInfo.Poster !== 'N/A' ? <img src={movieInfo.Poster} alt={movieTitle}/> : null }
            <p>Type: {movieInfo.Type}</p>
            <p>Year: {movieInfo.Year}</p>
            { props.myTopFive.includes(movieInfo) ? <button onClick={()=> props.removeFromFavs(movieInfo)}>Remove from Favs</button> : <button onClick={() => props.addToFavs(movieInfo)}>Add to Favs</button> }
        </div>
    )
}

export default MoviePage
