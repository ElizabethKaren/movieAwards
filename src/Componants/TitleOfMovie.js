import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    if (props.Type !== 'movie' || props.Poster === 'N/A') return <div></div>
    return (
        <div className='eachMovie'>
            <Link to={`/movie/{${props.Title}`} onClick={() => props.movieClicked(props)}><img id='moviePoster' src={props.Poster} alt={props.Title} width='170' height='240' /></Link>
        </div>
    )
}

export default TitleOfMovie