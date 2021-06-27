# Simple HTTP Proxy

This is a simple node forward proxy

## Usage

Run the proxy server on your server

```
PORT=3333 SECRET=my_api_key node index.js
```

Make an API request using the HTTP proxy and specify the domain you want to forward
requests to with `X-Proxy-Url`

```
PORT=5555 curl -u my_api_key: -H 'X-Proxy-Url: https://api.coingecko.com' http://localhost:5555/api/v3/ping
```