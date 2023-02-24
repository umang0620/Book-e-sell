import React from 'react'
import About from './About'
import Home from './Home'

export default function Goal(props) {

     if(props.Count === 1 || props.Count === 0)
     {
        return <Home/>
     }
     else{
         return <About/>
     }

   // return props.Count===1 || props.Count===0?<Home/>:<About/>
}
