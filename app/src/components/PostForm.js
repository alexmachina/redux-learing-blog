import React from 'react'
import {ControlLabel, FormGroup, FormControl,
  Row,  Button, Col} from 'react-bootstrap'
import RichTextEditor from 'react-rte'


export default class PostForm extends React.Component {
  onSubmit(e) {
      e.preventDefault()
    this.props.onSubmit(this.props.post)
  }
  render() {
    let titleValidationMessage = null;
    if(!this.props.isPostTitleValid) {
      titleValidationMessage = <p style={{color: 'red'}}>
        Required
      </p>
    }

    let bodyValidationMessage = null;
    if(!this.props.isPostBodyValid) {
      bodyValidationMessage = <p style={{color: 'red'}}>
        Required
      </p>
    }

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
              onBlur={this.props.validateTitle}
            />
            {titleValidationMessage}
            </FormGroup>
            <FormGroup> 
              <RichTextEditor
                value={this.props.post.body}
                onChange={this.props.onBodyChange}
                onBlur={this.props.validateBody}
              />
              {bodyValidationMessage}
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                value={this.props.post.tags}
                onChange={this.props.onTagsChange}
                placeholder="[T][A][G][S]"
              />
            </FormGroup>
            <Col xs={12} className="text-right">
              <Button type="submit" className="blog-form-button"> 
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
