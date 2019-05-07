import React, { Component } from 'react'
// import FastestRoute from './FastestRoute'
import Nodes from './Nodes'
import { fetchRoutes } from '../models'

export default class Routes extends Component {
  state = {
    routes: {},
    routeStart: "",
    routeTarget: ""
  }

  componentDidMount = () => {
    fetchRoutes(data => this.setState({routes: data}))
  }

  handleSelectStart = value => {
    this.setState({routeStart: value})
  }

  handleSelectTarget = value => {
    this.setState({routeTarget: value})
  }

  render() {
    const { routes } = this.state

    return (
      <div>
        <Nodes
          nodes={routes}
          selectNode={this.handleSelectStart}
        />
        {/* <FastestRoute /> */}
        <Nodes
          nodes={routes}
          selectNode={this.handleSelectTarget}
        />
      </div>
    )
  }
}
