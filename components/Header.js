import { Icon } from 'antd'
import { PageHeader, Button } from 'antd'
import { withRouter } from 'next/router'

const Header = ({ router }) => {
  if (router.pathname !== '/') {
    return (
      <PageHeader
        onBack={() => router.push('/')}
        title={router.pathname}
        extra={[
          <Button key="1" type="primary">
            Login
          </Button>,
        ]}
      />
    )
  } else {
    return (
      <PageHeader
        title="Flix"
        extra={[
          <Button key="1" type="primary">
            Login
          </Button>,
          <Button key="1" type="primary" onClick={() => router.push('/addVideo')}>
            <Icon type="file-add" style={{ fontSize: '16px', color: 'white' }} />
          </Button>,
        ]}
      />
    )
  }  
}

export default withRouter(Header)