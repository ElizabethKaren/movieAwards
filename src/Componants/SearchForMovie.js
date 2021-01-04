import React from 'react'
import MovieList from './MovieList'

const SearchForMovie = props => {
    return (
        <div>
            <h2>Search For your favorite Movies</h2>
            <br></br>
            <form>
                <input onChange={props.handleOnchage} name='input' placeholder='Search Movie...' value={props.input}></input>
            </form>
            <br></br>
            {/* <button onClick={props.handleSearch}>Search For Movie</button> */}
            <MovieList movieClicked={props.movieClicked} list={props.list}/>
        </div>
    )
}

export default SearchForMovie