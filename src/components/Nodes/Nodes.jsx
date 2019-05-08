import React from 'react'
import './Nodes.css'

const Nodes = props => {
  const { nodes, selectNode, activeNode } = props

  return (
    <div className="nodes-container" data-testid="nodes-container">
      {nodes.map(
        node =>
          <button 
            data-testid={node}
            className={`node${node === activeNode ? "--active": ""}`}
            children={node} 
            key={node} 
            onClick={() => selectNode(node)} 
          /> 
      )}
    </div>
  )
}

export { Nodes }
