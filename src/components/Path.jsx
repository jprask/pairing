import React from 'react'

export default function Path(props) {
  const { nodes, cost } = props.path

  return (
    <div>
      {nodes.map(node => <div key={node}>{node}</div>)}
      {cost}
    </div>
  )
}
