import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function Contact() {
  return (
    <> 
    <Helmet>
        <title>Contact</title>
    </Helmet> 
    <div className={Style.contact}>Contact</div>
    </>
 
  )
}

export default Contact