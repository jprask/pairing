const newPath = path => {
  const { nodes, cost } = path || {}

  return {
    nodes: nodes || [],
    cost: cost || 0
  }
}

const goTo = (target, path, map) => {
  if (!path.nodes.length)
    return newPath({
      nodes: [target]
    })

  const origin = path.nodes[path.nodes.length - 1]
  const edgeToTarget = map[origin].find(edge => edge.node === target)

  if (!!edgeToTarget)
    return newPath({
      nodes: path.nodes.concat([target]),
      cost: path.cost + edgeToTarget.cost
    })
}

export { newPath, goTo }
