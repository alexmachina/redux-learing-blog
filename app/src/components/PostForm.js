import React from 'react'
import {ControlLabel, FormGroup, FormControl,
  Row,  Button, Col} from 'react-bootstrap'
import RichTextEditor from 'react-rte'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.props.post)
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
            <ControlLabel>Body</ControlLabel>
            <FormControl
              componentClass="textarea"
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
