import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.topFive) return <div></div>
    if (props.topFive.length === 5) return <div className='nav'><br/><Link to='/topfive'>My Top Five</Link></div>
    return (
        <div className='nav'>
            <h2><Link to='/topfive'>{5 - props.topFive.length} movies left to add ...</Link></h2>

        </div>
    )
}

export default Nav