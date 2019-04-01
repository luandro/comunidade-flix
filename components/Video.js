// import { Player } from 'video-react'
// import "node_modules/video-react/dist/video-react.css"

export default ({ url }) => {
  return (
    <div>
      <video controls>
        <source src={url} type="video/mp4" />
      </video>
      <style jsx>{`
        video {
          max-width: 100%;
        }
      `}</style>
    </div>
  )
}
