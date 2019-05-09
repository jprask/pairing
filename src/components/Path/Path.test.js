import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Path } from '.'


describe('<Path />', () => {
  let path

  afterEach(cleanup)
  beforeEach(() => {
    path = {
      nodes: ["A", "B", "C", "D"],
      cost: 100
    }
  })

  describe('path', () => {
    it('Renders a node element for every node in the path', () => {
      const { getByTestId } = render(<Path path={path} />)

      expect(getByTestId('path').children.length).toBe(path.nodes.length)
    })

    it('Has node name as text in node element', () => {
      const { getByTestId } = render(<Path path={path} />)

      expect(getByTestId('C').textContent).toBe('C')
    })

    describe('when there is no nodes in path', () => {
      beforeEach(() => { path = { nodes: [], cost: 0 } })

      it('Renders 0 nodes', () => {
        const { getByTestId } = render(<Path path={path} />)

        expect(getByTestId('path').children.length).toBe(0)
      })
    })
  })

  describe('cost', () => {
    describe('when cost is integer', () => {
      it('shows cost value', () => {
        const { getByTestId } = render(<Path path={path} />)

        expect(getByTestId('cost').textContent).toBe(`Cost: ${path.cost}`)
      })
    })

    describe('when cost is falsy', () => {
      it('shows no path message', () => {
        const { getByTestId } = render(<Path />)

        expect(getByTestId('cost').textContent).toBe('No path!')
      })
    })
  })
})
