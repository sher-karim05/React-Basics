import React from 'react'

function Sidebar(props) {
  return (
    <div>
      <ul className='nav-side'>
        <li>SideBar {props.name}</li>
      </ul>
    </div>
  )
}

export default Sidebar
