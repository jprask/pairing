import React from 'react'
import './Path.css'

const Path = props => {
  const { nodes, cost } = props.path || {}

  return (
    <div className="path-container">
      {nodes && 
        <div className="path" data-testid="path">
          {nodes.map(
            node => 
              <div 
                className="path--node" 
                data-testid={node}
                key={node}
                children={node}
              />
          )}
        </div>
      }
      <div className="path--cost">
        <h1 
          data-testid="cost"
          children={Number.isInteger(cost) ? `Cost: ${cost}` : 'No path!'}
        />
      </div>
    </div>
  )
}

export { Path }
