import React from 'react'
import PublicAppBarContainer from '../containers/PublicAppBarContainer.js'

export default class PublicPage extends React.Component {
  render() {
    return (
      <div>
        <PublicAppBarContainer />
        {this.props.children}
      </div>
    )

  }
}
