const { createServer } = require('@graphql-yoga/node')

const server = createServer({
  logging: false,
  hostname: '127.0.0.1',
  multipart: false,
})

server.start()
