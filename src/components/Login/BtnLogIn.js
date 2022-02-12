import React from 'react'

function BtnLogIn(props) {

  return (
    <div>
        <button onClick={props.handleLogin}>Log In</button>
    </div>
  )
}

export default BtnLogIn