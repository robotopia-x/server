const html = require('choo/html')
// const sf = require('sheetify')
// sf('css/game.css', {global: true})


module.exports = function (globalConfig) {
  return function (state, prev, send) {

    if (state.p2p.star && !state.p2p.star.closed && state.p2p.star.peers.length > 0) {
      send('location:set', '/game')
    }

    return html`
<div>
    <div class="row">
        <h1>Welcome!</h1>
    </div>
    <div class="row">
        Connecting...
        <button onclick=${cancel}>Cancel</button>
    </div>
</div>
`
    function cancel(event) {
      send('p2p:stop', null)
      send('location:set', '/')
    }

  }
}