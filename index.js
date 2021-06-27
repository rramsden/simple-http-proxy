const app = express()
const basicAuth = require('express-basic-auth')
const express = require('express')
const request = require('request')

const API_KEY = process.env.API_KEY
if (API_KEY == null) {
  console.log(`Please specify ${API_KEY}`)
  process.exit(1)
}

// Setup Basic Auth
let auth = { users: {} }
auth.users[API_KEY] = ''
app.use(basicAuth(auth))

// Proxy Function
function proxy(req, res) {
  const endpoint = req.header('X-Proxy-Url')

  if (endpoint) {
    var newurl = endpoint + req.originalUrl
    request(newurl).pipe(res);
  } else {
    res.status(500)
    res.json({error: 'Please set X-Proxy-Url'})
  }
}

app.get('*', function(req, res) { proxy(req, res) })
app.post('*', function(req, res) { proxy(req, res) })

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log("listening on port %s...", server.address().port);
});