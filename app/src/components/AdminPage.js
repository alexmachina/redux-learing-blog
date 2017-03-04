import React from 'react'
import AppBar from './AppBar.js'
import LoginContainer from '../containers/LoginContainer.js'

export default class AdminPage extends React.Component {
  render() {
    let componentToRender = null 
    if(this.props.token) {
      console.log(typeof this.props.token)
    }
    if (this.props.token) {
      componentToRender = (
        <div>
          <AppBar />
          {this.props.children}
        </div>
      )
    } else {
      componentToRender = <LoginContainer />
    }
    return (
      <div id="adminPage">
        {componentToRender}
      </div>
    )
  }
}
