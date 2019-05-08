import React from 'react'
import './Path.css'

const Path = props => {
  const { nodes, cost } = props.path || {}

  return (
    <div className="path-container">
      {nodes && 
        <div className="path">
          {nodes.map(
            node => <div className="path--node" key={node}>{node}</div>
          )}
        </div>
      }
      <div className="path--cost">
        <h1>{Number.isInteger(cost) ? `Cost: ${cost}` : 'No path!'}</h1>
      </div>
    </div>
  )
}

export { Path }
