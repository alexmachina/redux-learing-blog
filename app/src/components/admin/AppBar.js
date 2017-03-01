import React from 'react'
import { Nav, Navbar, NavItem} from 'react-bootstrap'

export default class AppBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Alex's Blog
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/posts">Posts</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
