import React from 'react'
import { Link } from 'react-router-dom'

const Users = props => {
    return (
        <div>
            {props.users.map(person => <Link to={`/users/${person.id}`} onClick={props.movieClicked}><p>{person.name}</p></Link>)}
        </div>
    )
}

export default Users