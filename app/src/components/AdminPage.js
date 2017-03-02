import React from 'react'
import AppBar from './AppBar.js'
import LoginContainer from '../containers/LoginContainer.js'

export default class AdminPage extends React.Component {
  render() {
    let componentToRender = (
      <div>
        <AppBar />
        {this.props.children}
      </div>)

    if(!this.props.token) {
      componentToRender = <LoginContainer />
    }
    return (
      <div id="adminPage">
      {componentToRender}
    </div>
    )
  }
}
