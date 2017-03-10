import React from 'react'
import {Button, Row, Col, Table} from 'react-bootstrap'

export default class Categories extends React.Component {
  render() {
    return (
      <div className="container">
        <Table stripped hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>No. of Posts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.categories.map(c => 
              (<tr>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td></td>
                <td>
                  <Button className="blog-form-button">Edit</Button>
                </td>
              </tr>)
            )}
          </tbody>
        </Table>

        <button onClick={this.props.onClick}>Click me</button>

        <p>{this.props.paginationItems}</p>
      </div>
    )
  }
}
