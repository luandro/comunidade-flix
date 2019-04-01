const express = require('express')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3000

app.prepare()
.then(() => {
  const server = express()

  server.get('/service-worker.js', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const filePath = join(__dirname, '.next', pathname)
    app.serveStatic(req, res, filePath)
  })

  // server.get('/cesta', (req, res) => {
  //   const actualPage = '/cart'
  //   app.render(req, res, actualPage)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

