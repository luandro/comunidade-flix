import React, { Component } from 'react'
import Video from '../components/Video'
import { file } from '../utils/api'

class VideoPage extends Component {
  render () {
    const { url } = this.props
    return (
      <div>
        <Video url={url} />
      </div>
    )
  }
}

VideoPage.getInitialProps = async props => {
  let data = {}
  try {
    data = await file(props.query.id)

  } catch (err) {
    data = err
  }
  return data
}

export default VideoPage
