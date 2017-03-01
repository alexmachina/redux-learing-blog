import React from 'react'
import {ControlLabel, FormGroup, FormControl,
  Row, Modal, Button, Col} from 'react-bootstrap'

export default class PostForm extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
        <form onSubmit={this.props.onSubmit}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.props.post.title}
              onChange={(e) => this.props.setPostProperty({title: e.target.value})}
              placeholder="Title..."
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Body</ControlLabel>
           
          </FormGroup>
          <Col xs={12} className="text-right">
            <Button type="submit" bsStyle="primary">Post!</Button>
          </Col>
        </form>
      </Col>
      </Row>
    )

  }
}
