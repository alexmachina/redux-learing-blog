import React from 'react'
import {ControlLabel, Row, Col, 
  FormGroup, Button, FormControl} from 'react-bootstrap'

export default class CategoryForm extends React.Component {
  render() {
    let errorStyle = {color: 'red'}

    let nameValidationMessage = null
    if(!this.props.isNameValid) {
      nameValidationMessage = <p style={errorStyle}>Required</p>
    }

    let descriptionValidationMessage = null
    if (!this.props.isDescriptionValid) {
      descriptionValidationMessage =<p style={errorStyle}>Require</p>
    }

    return (
      <div>
        <Row>
          <Col xs={12}>
            <form onSubmit={(e) => {
              e.preventDefault()
              this.props.saveCategory(this.props.category)
              
            }}>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl 
                  type="text"
                  onChange={this.props.onNameChange}
                  value={this.props.category.name}
                  onBlur={this.props.validateName}
                />
                {nameValidationMessage}
              </FormGroup>

              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  onChange={this.props.onDescriptionChange}
                  value={this.props.category.description}
                  onBlur={this.props.validateDescription}
                />
                {descriptionValidationMessage}
              </FormGroup>

              <Col xs={12} className="text-right">
                <Button 
                  type="submit"
                  className="blog-form-button">
                  Save
                </Button>
              </Col>

            </form>
          </Col>
        </Row>
      </div>

    )
  }
}
