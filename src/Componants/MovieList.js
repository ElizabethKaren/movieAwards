import React from 'react'
import TitleOfMovie from './TitleOfMovie'

const MovieList = props => {
    const list = props.list.Search
    if (!list) return <div></div>
    if (props.list === '' || props.list === null) return <div></div>
    // if (props.list.length === 1) return <TitleOfMovie movieClicked={props.movieClicked} title={props.list.Title} /> 
    return (
        <div>
            {list.map(movie => <TitleOfMovie movieClicked={props.movieClicked} {...movie} key={movie.imdbID}/> )}
        </div>
    )
}

export default MovieList