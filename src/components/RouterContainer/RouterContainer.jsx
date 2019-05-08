import React from 'react'
import './RouterContainer.css'

function RouterContainer(props) {
  return (
    <div className="router-container">
      {props.children}
    </div>
  )
}

export { RouterContainer }
