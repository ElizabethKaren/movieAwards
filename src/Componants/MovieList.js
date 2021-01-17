import React from 'react'
import TitleOfMovie from './TitleOfMovie'

const MovieList = props => {
    if (props.myTopFive === null && props.list === null) return <div></div>
    if (props.myTopFive) return <div className='movieList'><br/><br/>{props.myTopFive.map(movie => <TitleOfMovie movieClicked={props.movieClicked} {...movie} key={movie.imdbID}/> )}</div>
    const list = props.list.Search
    if (!list) return <div></div>
    if (props.list === '' || props.list === null) return <div></div>
    // if (props.list.length === 1) return <TitleOfMovie movieClicked={props.movieClicked} title={props.list.Title} /> 
    return (
        <div className='movieList'>
            {list.map(movie => <TitleOfMovie movieClicked={props.movieClicked} {...movie} key={movie.imdbID}/> )}
        </div>
    )
}

export default MovieList