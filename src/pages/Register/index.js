import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function Register() {
  return (
    <> 
    <Helmet>
        <title>Register</title>
    </Helmet> 
    <div className={Style.register}>Register</div>
    </>
  )
}

export default Register