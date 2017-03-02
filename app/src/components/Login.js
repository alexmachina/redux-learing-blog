import React from 'react'
import {Button, Jumbotron, Row, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.props.user)

  }
  
  render() {
    let styles = {
    }
    return (
      <div className="login-form container" style={styles}>
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Jumbotron>
              <h1 className="text-center">Alex's Blog</h1>
            </Jumbotron>
            <form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl 
                  type="text"
                  placeholder="username"
                  value={this.props.user.username}
                  onChange={(e) => this.props.onUsernameChange(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.props.user.password}
                  onChange={(e) => this.props.onPasswordChange(e.target.value)}
                />
              </FormGroup>
              <Button type="submit" bsSize="lg">
                Login
              </Button>
              <span>{this.props.message}</span>
              </form>
              </Col>
              </Row>
              </div>
            )
            }
            }

            Login.propTypes = {
              user: React.PropTypes.shape({
                username: React.PropTypes.string,
                password: React.PropTypes.string
              }).isRequired,
              onSubmit: React.PropTypes.func.isRequired,
              onUsernameChange: React.PropTypes.func.isRequired,
              onPasswordChange: React.PropTypes.func.isRequired,
              message: React.PropTypes.string
            }

            export default Login
