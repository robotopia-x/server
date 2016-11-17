const choo = require('choo')
const app = choo()

var globalConfig = {
  signalhubUrl: 'https://signalhub.perguth.de:65300'
}

app.model(require('./choo/game/')(globalConfig))

//creates routing, default route = /404
app.router('/404', require('./choo/routing')(globalConfig))

const appTree = app.start()

document.body.appendChild(appTree)