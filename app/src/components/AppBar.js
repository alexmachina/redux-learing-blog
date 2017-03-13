import React from 'react'
import { Nav, Navbar, NavItem} from 'react-bootstrap'

export default class AppBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              Alex's Blog
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/categories">Categories</NavItem>
            <NavItem href="/posts">Posts</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem onClick={this.props.onLogoutClick}>Logout</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
