import Feed from '../components/Feed'
import { files } from '../utils/api'

const Index = ({ data }) => <Feed items={data} />

Index.getInitialProps = async props => {
  let data = {}
  try {
    data = await files()
  } catch (err) {
    data = err
  }
  console.log('DATAAAA', data)
  return {
    data
  }
}

export default Index