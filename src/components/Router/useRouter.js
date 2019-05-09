import { useState, useEffect, useMemo } from 'react'
import { fetchRoutes, findShortestPath } from '../../models'

const useRouter = () => {
  const [map, setMap] = useState({})
  const [routeOrigin, selectOrigin] = useState('')
  const [routeTarget, selectTarget] = useState('')

  useEffect(() => { fetchRoutes(setMap) }, [])

  const shortestPath = useMemo(
    () => findShortestPath(map, routeOrigin, routeTarget),
    [map, routeOrigin, routeTarget]
  )

  const nodes = useMemo(() => Object.keys(map), [map])

  return {
    map,
    nodes,
    routeOrigin,
    routeTarget,
    selectOrigin,
    selectTarget,
    shortestPath
  }
}

export { useRouter }
