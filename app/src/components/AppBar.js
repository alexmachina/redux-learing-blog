import React from 'react'
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'

export default class AppBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                Alex's Blog
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/admin/categories">Categories</NavItem>
            <NavItem href="/admin/posts">Posts</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem onClick={this.props.onLogoutClick}>Logout</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
