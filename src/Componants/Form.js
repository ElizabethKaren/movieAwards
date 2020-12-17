import React from 'react'

const Form = props => {
    return (
        <div>
        <br></br>
            <form onChange={props.handleOnchage}>
                <input name='userName' placeholder='Name'></input>
                <br></br>
                <br></br>
                <input name='password1' type='password' placeholder='Movies99'></input>
                <br></br>
                <br></br>
                <input name='password2' type='password' placeholder='Movies99'></input>
                <br></br>
                <br></br>
                <button onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form