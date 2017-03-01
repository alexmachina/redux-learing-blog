import {Table, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router'

export default class PostsTable extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col className="table-controls text-right" xs={12} sm={6} smOffset={6}>
            <Link to="/post">
            <Button bsStyle="primary">
              New Post
            </Button>
          </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.posts.map(p => (
                  <tr key={p._id}>
                    <td>{p.title}</td>
                    <td>
                      <Button bsStyle="default">
                        <Link to={`/post/${p._id}`}>Edit</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

    )

  }
}
