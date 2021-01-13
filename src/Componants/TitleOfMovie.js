import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    console.log(props)
    return (
        <div className='eachMovie'>
            <Link to={`/movie/{${props.Title}`} onClick={() => props.movieClicked(props)}><p>{props.Title} - {props.Year}</p></Link>
            { props.Poster === 'N/A' ? null : <Link to={`/movie/{${props.Title}`}><img src={props.Poster} alt={props.Title} /></Link> }
        </div>
    )
}

export default TitleOfMovie