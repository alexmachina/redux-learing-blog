import React from 'react'
import {Row, Col, Button, FormGroup, 
  ControlLabel, FormControl} from 'react-bootstrap'

export default class PostForm extends React.Component {
  componentDidMount() {
    let id = this.props.params.id

    console.log(this.props.params.id)
    if(id) {
      console.log(id)
      this.props.loadPost(id)
    }
  }
  getBodyValidationState() {
    if(this.props.post.body) {
      return 'success'
    } else {
      return 'error'
    }
  }

  getTitleValidationState() {
    if(this.props.post.title) {
      return 'success'
    } else {
      return 'error'
    }
        
  }

  onTitleChange(e) {
    this.props.setPostProperty({title: e.target.value})
  }

  onBodyChange(e) {
    this.props.setPostProperty({body: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.post)
  }
  
  render() {
    return (
      <div className="container text-left">
        <Row>
          <Col xs={12}>
            <form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup
                controlId="titleInput"
                validationState={this.getTitleValidationState()}
              >
                <ControlLabel>Title</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.props.post.title}
                  placeholder="Title..."
                  onChange={this.onTitleChange.bind(this)}
                />
              </FormGroup>
              <FormGroup
                controlId="bodyInput"
                validationState={this.getBodyValidationState()}
              >
                <ControlLabel>Body</ControlLabel>
                <FormControl 
                  componentClass="textarea"
                    value={this.props.post.body}
                  placeholder="Title..."
                  onChange={this.onBodyChange.bind(this)}
                />
              </FormGroup>
              <Row>
                <Button type="submit">
                  Save
                </Button>
              </Row>

            </form>
          </Col>
        </Row>
      </div>
      )
  }
  }
