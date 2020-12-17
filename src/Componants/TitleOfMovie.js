import React from 'react'
import { Link } from 'react-router-dom'

const TitleOfMovie = props => {
    console.log(props)
    return (
        <div>
            <Link to={`/{${props.Title}`}><h3>{props.Title}</h3></Link>
        </div>
    )
}

export default TitleOfMovie