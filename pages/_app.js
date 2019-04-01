import React from 'react'
import App, { Container } from 'next/app'
import { Layout } from 'antd'
import HeaderComponent from '../components/Header'

const {
  Header, Footer, Sider, Content,
} = Layout

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <HeaderComponent />
          <Content style={{ padding: '50px 5%', margin: '0 auto', maxWidth: '100%' }}>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Container>
    )
  }
}

export default MyApp
