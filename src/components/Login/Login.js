import React, {useState} from 'react'

function Login() {
  //variable for login, to to able to change its state. Conditional rendering. Initial value = not loggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //create initial state for button
  let button = ""
  let greeting = ""

  //create function for loggin on, changing state to true
  const handleLogin = () => setIsLoggedIn(true)
  
  //same for loggin out
  const handleLogOut = () => setIsLoggedIn(false)

// if user is logged in, show log out btn and greet the user, else show log in btn and show stranger greeting
if (isLoggedIn) {
    button = <button onClick={handleLogOut}>Log Out</button>
    greeting = <h3>Welcome back, Philip! </h3>
} else { 
    button = <button onClick={handleLogin}>Log In</button>
    greeting = <h3>Welcome, please log in or create an account. </h3>

}


    return (
    <div> 
        {button}
        {greeting}
    </div>
  )
}

export default Login