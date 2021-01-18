import React from 'react'
import TitleOfMovie from './TitleOfMovie'
import { Link } from 'react-router-dom'

const MovieList = props => {
    if (props.myTopFive === null && props.list === null) return <div></div>
    if (props.myTopFive) return (
        <div className='movieList'>
            <br></br>
            <Link to='/'><p id='x'>x</p></Link>
            <br></br>
            <br></br>
            {props.myTopFive.map(movie => <TitleOfMovie movieClicked={props.movieClicked} {...movie} key={movie.imdbID}/> )}
        </div>
    )
    if (!props.list) return <div></div>
    const list = props.list.Search
    if (!list) return <div></div>
    if (props.list === '' || props.list === null) return <div></div>
    return (
        <div className='movieList'>
            {list.map(movie => <TitleOfMovie movieClicked={props.movieClicked} {...movie} key={movie.imdbID}/> )}
        </div>
    )
}

export default MovieList