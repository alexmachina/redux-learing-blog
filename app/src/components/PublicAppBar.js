import React from 'react'
import {Link} from 'react-router'
import {Row, Col, Nav, Navbar, NavItem,
NavDropdown, MenuItem} from 'react-bootstrap'



export default class PublicAppBar extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    let menuStyle = { color: 'orange !important'}
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
            <NavItem href="/posts">Posts</NavItem>
            <NavDropdown title="Categorias">
              {this.props.categories.map(c => (
                <MenuItem id={c._id} title={c.name} className="drop">
                  <Link style={menuStyle} to= {'/categories/posts/' + c.name}>
                    {c.name}
                  </Link>
                </MenuItem>
              ))}

            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
