import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function Services() {
  return (
    <> 
    <Helmet>
        <title>Services</title>
    </Helmet> 
    <div className={Style.services}>Services</div>
    </>
  )
}

export default Services