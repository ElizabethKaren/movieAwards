import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    return (
        <div>
            <Link to={`/{${props.Title}`} onClick={() => props.movieClicked(props)}><h3>{props.Title}</h3></Link>
        </div>
    )
}

export default TitleOfMovie