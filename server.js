const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var bodyParser = require('body-parser');

app.prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.use('/api/', require('./api/routes/'));
    

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
