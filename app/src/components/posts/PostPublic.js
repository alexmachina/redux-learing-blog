import React from 'react'
import {Row,Modal, Col, Jumbotron, Button} from 'react-bootstrap'


export default class PostPublic extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Jumbotron className="blog-jumbotron">
            <Col xs={12} className="text-center">
              <h1>{this.props.post.title}</h1>
            </Col>
            <Row>
            </Row>
          </Jumbotron>
        </Row>
        <Row>
          <Col xs={12} >
            <div dangerouslySetInnerHTML={{__html: this.props.post.body}} />
          </Col>
        </Row>
      </div>
    )
  }
}
