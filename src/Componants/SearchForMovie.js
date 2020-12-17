import React from 'react'

const SearchForMovie = props => {
    return (
        <div>
            <form>
                <input onChange={props.handleOnchage} name='input' placeholder='Search Movie...' value={props.input}></input>
            </form>
            <br></br>
            <button onClick={props.handleSearch}>Search For Movie</button>
        </div>
    )
}

export default SearchForMovie