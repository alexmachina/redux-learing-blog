import React from 'react'
import {Pagination, Row, Col, Jumbotron, Button, Modal} from 'react-bootstrap'
import PostFormContainer from '../../containers/posts/PostFormContainer.js'
import {Link} from 'react-router'
import moment from 'moment'

export default class Posts extends React.Component {
  render() {
    return (
      <div className="container">
        <p>{this.props.errorMessage}</p>
        <Jumbotron className="blog-jumbotron">
          <Row>
            <Col xs={12} className="text-center">
              <h1>Posts</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-right">
              <Button
                onClick={() => this.props.onNewPostClick()}
                bsSize="lg" 
                className="blog-form-button"> 
                Post</Button>
            </Col>
          </Row>
        </Jumbotron>
        <Row>
          {this.props.posts.map(post => (
            <Col xs={12} key={post._id}>
              <h1>
                <Link to={`/post/${post._id}`} className="post-link">{post.title}</Link>
              </h1>
              <h4>In: {post.category.name}</h4>
                <h4>{moment(post.date).format('DD/MM/YYYY')}</h4>
              <Col xs={12}>
                <div dangerouslySetInnerHTML={{__html: post.body}} />
              </Col>
            </Col>
          ))}
        </Row>
        <Pagination
          bsSize="large"
          items={this.props.items}
          activePage={this.props.activePage}
          onSelect={this.props.handlePaginationSelect}
        />
        <Row>
          <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PostFormContainer />
            </Modal.Body>
          </Modal>
        </Row>
      </div>
    )
  }
}
