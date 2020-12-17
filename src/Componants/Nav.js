import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.user) return <div><Link to='/signup'><button>Create Accout</button></Link></div>
    return (
        <div>

        </div>
    )
}

export default Nav