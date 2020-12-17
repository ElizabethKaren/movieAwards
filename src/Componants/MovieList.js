import React from 'react'
import TitleOfMovie from './TitleOfMovie'

const MovieList = props => {
    console.log(props)
    if (props.list === '' || props.list === null) return <div></div>
    if (props.list.length === 1) return <TitleOfMovie title={props.list.Title} /> 
    const list = props.list.Search
    return (
        <div>
            {list.map(movie => <TitleOfMovie {...movie} key={movie.imdbID}/> )}
        </div>
    )
}

export default MovieList