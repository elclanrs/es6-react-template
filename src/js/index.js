import $ from 'jquery'
import React from 'react'

var Test = React.createClass({
  getInitialState() {
    return {
      text: 'Hello World'
    }
  },
  render() {
    return <div>
      <h1>{this.state.text}</h1>
    </div>
  }
})

React.render(<Test/>, $('#react-app').get(0))
