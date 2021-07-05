import React from 'react'
import MovieList from './MovieList'

const SearchForMovie = props => {
    return (
        <div>
            <h2>Search your favorite Movies</h2>
            <br></br>
            <form>
                <input onKeyDown={(e) => (e.key === 'Enter') && e.preventDefault()} onChange={props.handleOnchage} name='input' placeholder='Search Movie...' value={props.input}></input>
            </form>
            <br></br>
            <MovieList movieClicked={props.movieClicked} list={props.list}/>
        </div>
    )
}

export default SearchForMovie