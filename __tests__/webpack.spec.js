describe('Webpack Client Config', () => {
  it('doesn\'t error out', () => {
    const clientConfig = require('~/webpack.client.config.js')
    expect(clientConfig()).toBeDefined()
  })
})

describe('Webpack Server Config', () => {
  it('doesn\'t error out', () => {
    const serverConfig = require('~/webpack.server.config.js')
    expect(serverConfig()).toBeDefined()
  })
})