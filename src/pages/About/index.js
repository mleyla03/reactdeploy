import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function About() {
  return (
    <> 
    <Helmet>
        <title>About</title>
    </Helmet> 
    <div className={Style.about}>About</div>
    </>
  
  )
}

export default About