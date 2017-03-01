import React from 'react'
import {Row, Col, Jumbotron, Button, Modal} from 'react-bootstrap'
import PostForm from './PostForm.js'

export default class Posts extends React.Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Row>
            <Col xs={12}>
              <h1>Posts</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-right">
              <Button
                onClick={() => this.props.onNewPostClick()}
                bsSize="lg" 
                bsStyle="primary">New Post</Button>
            </Col>
          </Row>
        </Jumbotron>
        <Row>
          {this.props.posts.map(post => (
            <Col xs={12} key={post._id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Col>
          ))}
        </Row>

        <Row>
          <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PostForm post={this.props.post} 
              setPostProperty={this.props.setPostProperty}/>
            </Modal.Body>
          </Modal>
        </Row>
      </div>
    )
  }
}
