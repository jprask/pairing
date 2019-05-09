import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Nodes } from '.'


describe('<Nodes />', () => {
  let nodes, selectNode, activeNode

  afterEach(cleanup)
  beforeEach(() => {
    nodes = ["A", "B", "C", "D"]
    selectNode = jest.fn()
    activeNode = "A"
  })

  it('Renders a node element for every node', () => {
    const { getByTestId } = render(
      <Nodes
        nodes={nodes}
        selectNode={selectNode}
        activeNode={activeNode}
      />
    )

    expect(getByTestId('nodes-container').children.length).toBe(nodes.length)
  })

  it('Has node name as text in node element', () => {
    const { getByTestId } = render(
      <Nodes
        nodes={nodes}
        selectNode={selectNode}
        activeNode={activeNode}
      />
    )

    expect(getByTestId('A').textContent).toBe('A')
  })

  it('Calls selectNode callback with selected node', () => {
    const { getByTestId } = render(
      <Nodes
        nodes={nodes}
        selectNode={selectNode}
        activeNode={activeNode}
      />
    )

    fireEvent.click(getByTestId('B'))

    expect(selectNode).toHaveBeenCalledWith('B')
  })
})

