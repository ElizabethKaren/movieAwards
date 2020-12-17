import React from 'react'
import TitleOfMovie from './TitleOfMovie'

const MovieList = props => {
    if (props.list === '') return <div></div>
    if (props.list.length === 1) return <TitleOfMovie title={props.list.title} /> 
    const list = props.list.Search
    if (props) return (
        <div>
            {list.map(movie => <TitleOfMovie {...movie} key={movie.imdbID}/> )}
        </div>
    )
}

export default MovieList