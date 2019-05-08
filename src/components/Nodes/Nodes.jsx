import React from 'react'
import './Nodes.css'

const Nodes = props => {
  const { nodes, selectNode, activeNode } = props

  return (
    <div className="nodes-container">
      {nodes.map(
        node => 
          <button 
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
