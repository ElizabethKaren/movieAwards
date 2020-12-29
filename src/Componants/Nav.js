import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.user) return <div className='nav'><br/><Link to='/signup'><p>Create Accout</p></Link></div>
    return (
        <div>

        </div>
    )
}

export default Nav