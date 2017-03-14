import React from 'react'
import {Pagination, Row, Col, Jumbotron, Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router'
import moment from 'moment'

export default class Posts extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.errorMessage}</p>
        <Row>
          <Col  xs={12} sm={12} mdOffset={3} md={9} >
            {this.props.posts.map(post => (
              <Col key={post._id}>
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
            <Pagination
              bsSize="large"
              items={this.props.items}
              activePage={this.props.activePage}
              onSelect={this.props.handlePaginationSelect}
            />

        </Col>
      </Row>
    </div>
    )
  }
}
