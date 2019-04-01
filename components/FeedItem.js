import React, { Component } from 'react'
import Link from 'next/link'
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd'

const { Meta } = Card

export default class extends Component {
  state = {
    loading: false,
  }

  onLoaded = (checked) => {
    this.setState({ loading: !checked })
  }

  render() {
    const { loading } = this.state
    const { _id, name, image, description, price, fraction, timeLimit, organizer, contributors, status} = this.props
    console.log(this.props)
    return (
      <Link href={`/video?id=${_id}`}>
        <Card
          style={{ width: 300, margin: '10px auto', textAlign: 'center' }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src={image} />}
              title={name}
              description={description}
            />
          </Skeleton>
        </Card>
      </Link>
    )
  }
}
