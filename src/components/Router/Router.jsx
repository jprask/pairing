import React from 'react'
import { useRouter } from '.'
import { Path } from '../Path'
import { Nodes } from '../Nodes'
import { RouterContainer } from '../RouterContainer'

const Router = () => {
  const {
    nodes, 
    routeOrigin, 
    routeTarget, 
    selectOrigin, 
    selectTarget, 
    shortestPath
  } = useRouter()

  return (
    <RouterContainer>
      <Nodes
        nodes={nodes}
        selectNode={selectOrigin}
        activeNode={routeOrigin}
      />
      {!!routeOrigin && !!routeTarget &&
        <Path path={shortestPath} />
      }
      <Nodes
        nodes={nodes}
        selectNode={selectTarget}
        activeNode={routeTarget}
      />
    </RouterContainer>
  )
}

export { Router }
