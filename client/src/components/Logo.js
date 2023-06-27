import React from 'react'

function Logo(props) {
  return (
  <a href = {props.href} target='blank'> <img src  = {props.url} className="logo" /> </a>
  )
}

export default Logo