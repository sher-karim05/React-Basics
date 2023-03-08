import React from 'react'

function Bag(props) {
    const bag = {
        padding: "20px",
        border: "2px solid green",
        background: "#F98C36",
        margin: "20px 0"
    }
  return (
    <div style={bag}>
        {props.childern}
    </div>
  )
}

export default Bag
