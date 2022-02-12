import React, {useState} from 'react'

function Login() {
  //variable for login, to to able to change its state. Conditional rendering. Initial value = not loggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //create function for loggin on, changing state to true
  const handleLogin = () => setIsLoggedIn(true)
  
  //same for loggin out
  const handleLogOut = () => setIsLoggedIn(false)

    return (
    <div>Login</div>
  )
}

export default Login