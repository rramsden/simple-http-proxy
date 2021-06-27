const express = require('express')
const app = express()
const request = require('request');

const ENDPOINT = process.env.HOST

app.get('*', function(req,res) {
  var newurl = ENDPOINT + req.originalUrl
  request(newurl).pipe(res);
})

app.post('*', function(req,res) {
  var newurl = ENDPOINT + req.originalUrl
  request(newurl).pipe(res);
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log("listening on port %s...", server.address().port);
});