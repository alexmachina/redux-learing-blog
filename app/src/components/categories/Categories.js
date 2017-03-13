import React from 'react'
import CategoryFormContainer from '../../containers/categories/CategoryFormContainer.js'
import {Modal,Button, Row, Col, Table, Jumbotron} from 'react-bootstrap'

export default class Categories extends React.Component {
  render() {
    console.log(this.props.showModal)
    return (
      <div className="container">
        <Row>
          <Col xs={12}>
            <Jumbotron className="blog-jumbotron">
              <Row>
                <Col xs={12} className="text-center">
                <h1>Categories</h1>
              </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-right">
                  <Button
                    onClick={this.props.onNewCategoryClick}
                    bsSize="lg" 
                    className="blog-jumbotron-button">
                    Add new
                  </Button>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Table  hover>
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
              (<tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td></td>
                <td>
                  <Button 
                    onClick={() => {
                      this.props.handleEditClick(c)
                    }}
                    className="blog-form-button">Edit</Button>
                </td>
              </tr>)
            )}
          </tbody>
        </Table>
        <Row>
          <Modal show={this.props.showModal} onHide={this.props.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CategoryFormContainer />
            </Modal.Body>
          </Modal>
        </Row>

      </div>
    )
  }
}
