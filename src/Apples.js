import React from 'react'

function Apples(props) {
  return (
    <div className='promo-section'>
        <div>
            <h2 style={{color: "white", fontSize:"2.4rem",fontWeight: "bold"}}>These apples are: {props.color}</h2>
        </div>
        <div>
            <h3 className='pears'>There are {props.number} of apples</h3>
        </div>
        <div>
            {/* <h2>{Math.random() >= 0.9 ? "high hp value": "low ph value"}</h2> */}
            <h4>Randam numbers {Math.floor(Math.random() * 7) + 4}</h4>
        </div>
    </div>
  )
}

export default Apples
