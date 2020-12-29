import React from 'react'
import MoviePage from './MoviePage'

const UserPage = props => {

    const personID = parseInt(props.history.match.params.id)
    const user = props.users.find(user => user.id === personID)
    if (!user) return <div></div>
    return (
        <div>
            <h3>{user.name}'s Movies</h3>
            {user.movieList.length !== 0 || user.movieList == null ? user.movieList.map(movie => <MoviePage movieClicked={props.movieClicked} {...movie} /> ) : null }

        </div>
    )
}

export default UserPage