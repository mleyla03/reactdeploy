import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
function Home() {
  return (
    <> 
    <Helmet>
        <title>Home</title>
    </Helmet> 
    <div className={Style.home}>Home</div>
    </>
  )
}

export default Home