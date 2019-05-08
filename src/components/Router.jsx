import React, { Component } from 'react'
import Path from './Path'
import Nodes from './Nodes'
import { fetchRoutes, findShortestPath } from '../models'

export default class Router extends Component {
  state = {
    routes: {},
    routeOrigin: "",
    routeTarget: ""
  }

  componentDidMount = () => {
    fetchRoutes(data => this.setState({routes: data}))
  }

  handleSelectOrigin = value => {
    this.setState({routeOrigin: value})
  }

  handleSelectTarget = value => {
    this.setState({routeTarget: value})
  }

  render() {
    const { routes, routeOrigin, routeTarget } = this.state
    const nodes = Object.keys(routes)

    return (
      <div>
        <Nodes
          nodes={nodes}
          selectNode={this.handleSelectOrigin}
        />
        {!!routeOrigin && !!routeTarget &&
          <Path path={findShortestPath(routes, routeOrigin, routeTarget)} />
        }
        <Nodes
          nodes={nodes}
          selectNode={this.handleSelectTarget}
        />
      </div>
    )
  }
}
