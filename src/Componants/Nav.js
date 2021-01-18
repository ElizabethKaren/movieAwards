import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.topFive) return <div></div>
    if (props.topFive.length === 5) return <div className='nav'><br/><Link to='/topfive'>My Top Five</Link></div>
    return (
        <div className='nav'>
            <Link to='/topfive'>{5 - props.topFive.length} fav left..</Link>
        </div>
    )
}

export default Nav