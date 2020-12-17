import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    return (
        <div>
            <Link to={`/{${props.title}`}><h3>{props.title}</h3></Link>
        </div>
    )
}

export default TitleOfMovie