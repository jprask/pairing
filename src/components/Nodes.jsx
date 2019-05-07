import React from 'react'

export default function Nodes(props) {
  const { nodes, selectNode } = props

  return (
    <div>
      {Object.keys(nodes).map(
        node => 
          <button 
            onClick={() => selectNode(node)} 
            key={node} 
            children={node} 
          /> 
      )}
    </div>
  )
}
