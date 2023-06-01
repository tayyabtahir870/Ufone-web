import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Links from '../Links'

function Base(props) {
  return (
    <div>
        <Header/>
        {
        props.children  
        }
        <Links/>
        <Footer/>
    </div>
  )
}

export default Base