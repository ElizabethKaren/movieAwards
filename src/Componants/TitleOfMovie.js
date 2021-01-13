import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    const year = parseInt(props.Year )
    return (
        <div className='eachMovie'>
            <Link to={`/movie/{${props.Title}`} onClick={() => props.movieClicked(props)}><p>{props.Title} - {year}</p></Link>
            { props.Poster === 'N/A' ? null : <Link to={`/movie/{${props.Title}`}><img src={props.Poster} alt={props.Title} /></Link> }
        </div>
    )
}

export default TitleOfMovie