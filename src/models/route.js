import { newPath, goTo } from './'

const fetchRoutes = callback => {
  fetch('http://localhost:3001/routes')
    .then(response => response.json())
    .then(data => callback(data))
}

const findShortestPath = (map, origin, target, path = newPath()) => {
  const currentPath = goTo(origin, path, map)
  let shortestPath = null
  const isEndOfPath = (!currentPath || origin === target)

  if (isEndOfPath)
    return currentPath

  map[origin].forEach(edge => {
    const { node } = edge
    let nextPath
    if (!path.nodes.includes(node)) {
      nextPath = findShortestPath(map, node, target, currentPath)
      if (!!nextPath) {
        if (!shortestPath || shortestPath.cost > nextPath.cost)
          shortestPath = nextPath
      }
    }
  })

  return shortestPath
}

export { fetchRoutes, findShortestPath }
