import { findShortestPath } from '../../models'

describe('findShortestPath', () => {
  const map = {
    "A": [{ "node": "B", "cost": 10 }, { "node": "C", "cost": 20 }],
    "B": [{ "node": "D", "cost": 15 }, { "node": "E", "cost": 50 }],
    "C": [{ "node": "D", "cost": 30 }, { "node": "E", "cost": 30 }],
    "D": [{ "node": "E", "cost": 30 }],
    "E": [{ "node": "B", "cost": 50 }, { "node": "C", "cost": 30 }, { "node": "D", "cost": 30 }]
  }

  describe('when origin is target', () => {
    const { nodes, cost } = findShortestPath(map, 'A', 'A')

    it('finds the path', () => {
      expect(nodes).toEqual(['A'])
    })

    it('has the right cost', () => {
      expect(cost).toBe(0)
    })
  })

  describe('when target node is adjacent', () => {
    const { nodes, cost } = findShortestPath(map, 'A', 'B')

    it('finds the path', () => {
      expect(nodes).toEqual(['A', 'B'])
    })

    it('has the right cost', () => {
      expect(cost).toBe(10)
    })
  })

  describe('when path is complex', () => {
    //A -> B -> E = 10+50 / A -> C -> E = 20+30
    const { nodes, cost } = findShortestPath(map, 'A', 'E')

    it('finds the path', () => {
      expect(nodes).toEqual(['A', 'C', 'E'])
    })

    it('has the right cost', () => {
      expect(cost).toBe(20 + 30)
    })
  })

  describe('when there is no path', () => {
    it('does not return a path', () => {
      expect(findShortestPath(map, 'D', 'A')).toBeFalsy()
    })
  })
})
