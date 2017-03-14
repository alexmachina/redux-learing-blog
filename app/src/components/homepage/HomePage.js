import React from 'react'
import {Row, Col, Jumbotron, Button} from 'react-bootstrap'
import PostsContainer from '../../containers/homepage/PostsContainer.js'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <PostsContainer />
      </div>
    )
  }
}
