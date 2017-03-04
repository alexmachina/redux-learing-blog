import React from 'react'
import {Row, Col, Jumbotron, Button} from 'react-bootstrap'


export default class Post extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Jumbotron>
            <h1>{this.props.post.title}</h1>
            <Button onClick={this.props.onEditClick} bsStyle="primary">
              Edit
            </Button>

          </Jumbotron>
        </Row>
        <Row>
          <Col xs={12}>
            {this.props.post.body}
          </Col>
        </Row>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostFormContainer />
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}
