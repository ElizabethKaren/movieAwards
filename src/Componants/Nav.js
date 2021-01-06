import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.topFive) return <div></div>
    if (props.topFive.length === 5) return <div><br/><Link to='/topfive'><button>See My Top Five</button></Link></div>
    return (
        <div>
            <h2>{5 - props.topFive.length} movies left to add ...</h2>

        </div>
    )
}

export default Nav