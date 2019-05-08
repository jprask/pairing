import React from 'react'
import './Path.css'

const Path = props => {
  const { nodes, cost } = props.path

  return (
    <div className="path-container">
      <div className="path">
        {nodes.map(
          node => <div className="path--node" key={node}>{node}</div>
        )}
      </div>
      <div className="path--cost">
        <h1>Cost: {cost}</h1>
      </div>
    </div>
  )
}

export { Path }
