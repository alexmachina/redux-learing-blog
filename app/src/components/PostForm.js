import React from 'react'
import {ControlLabel, FormGroup, FormControl,
  Row,  Button, Col} from 'react-bootstrap'
import RichTextEditor from 'react-rte'


export default class PostForm extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    let post = this.props.post
    post.body = post.body.toString('html')
    this.props.onSubmit(post)
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.props.post.title}
              onChange={this.props.onTitleChange}
              placeholder="Title..."
            />
            </FormGroup>
            <FormGroup> 
              <RichTextEditor
                value={this.props.post.body}
                onChange={this.props.onBodyChange}
              />
      
        </FormGroup>
        <Col xs={12} className="text-right">
          <Button type="submit" bsStyle="primary">
            {this.props.isFetching ? "Loading..." : "New Post"}
          </Button>
        </Col>
        <p>{this.props.errorMessage}</p>
      </form>
    </Col>
  </Row>
    )

  }
}
