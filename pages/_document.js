import Document, { Html, Head, Main, NextScript } from 'next/document'
import stylesheet from 'antd/dist/antd.min.css'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
