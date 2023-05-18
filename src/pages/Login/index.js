import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function Login() {
  return (
    <> 
    <Helmet>
        <title>Login</title>
    </Helmet> 
    <div className={Style.login}>Login</div>
    </>
  )
}

export default Login