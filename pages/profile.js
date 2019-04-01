import Router from 'next/router'
// import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
// import Layout from '../components/layout'
import { withAuthSync } from '../utils/auth'

const Profile = props => {
  const { name, login, bio, avatarUrl } = props.data

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx)
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/api/profile.js`
    : `${protocol}://${ctx.req.headers.host}/api/profile.js`

  const redirectOnError = () =>
    process.browser
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      return await response.json()
    } else {
      // https://github.com/developit/unfetch#caveats
      return redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(Profile)
