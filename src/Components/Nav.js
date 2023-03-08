import React from 'react'

function Nav(props) {
  return (
    <div className='nav-container'>
      <ul className='nav-ul'>
        <li>Home {props.name}</li>
      </ul>
    </div>
  )
}

export default Nav
