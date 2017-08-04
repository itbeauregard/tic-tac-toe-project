'use strict'

const app = require('../store.js')
// const resourceWatcher = require('./resource-watcher-0.1.0.js')
const config = require('../config.js')

const onSuccess = function (data) {
  app.user = data.user
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.account) {
    console.log(data.account)
  } else {
    console.table(data.accounts)
  }
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the account!')
}

const onError = function (response) {
  console.error(response)
}

const onCreateSuccess = function (data) {
  app.user = data.user
  console.log(data)
  console.log(data.account)
}

const onSignOutSuccess = function () {
  // app.user = null
  console.log('sign out successful')
  // console.log(data.account)
}

const onCreateGameSuccess = function (data) {
  // app.user = data.user
  console.log(data)
  console.log('createGameSuccess from ui.js ran!')
}

const onGetGamesSuccess = function (data) {
  app.data = data.user
  console.log(data)
  console.log('onGetGamesSuccess from ui.js ran!')
}

const onGetGameSuccess = function (data) {
  app.data = data.user
  console.log(data)
  console.log('onGetGameSuccess from ui.js ran!')
}

// const onJoinGameSuccess = (data) => {
//   app.user = data.user
//   app.game = data.game
//   $('.player2-message').text('Successfully joined')
//   $('.player2-game').text('Game ID: ' + app.game.id)
//
//   const gameWatcher = resourceWatcher.resourceWatcher(config.host + '/' + app.game.id + '/watch', {
//     Authorization: 'Token token=' + app.user.token
//   })
//
//   gameWatcher.on('change', function (data) {
//     console.log(data)
//     if (data.game && data.game.cells) {
//       const diff = changes => {
//         const before = changes[0]
//         const after = changes[1]
//         for (let i = 0; i < after.length; i++) {
//           if (before[i] !== after[i]) {
//             return {
//               index: i,
//               value: after[i]
//             }
//           }
//         }
//
//         return { index: -1, value: '' }
//       }
//
//       const cell = diff(data.game.cells)
//       $('#watch-index').val(cell.index)
//       $('#watch-value').val(cell.value)
//     } else if (data.timeout) { // not an error
//       gameWatcher.close()
//     }
//   })
// }
const onJoinGameSuccess = function (data) {
  app.user = data.user
  console.log(data)
  console.log('onJoinGameSuccess from ui.js ran!')
}

const onUpdateGameStateSuccess = function (data) {
  app.user = data.user
  console.log(data)
  console.log('onUpdateGameStateSuccess from ui.js ran!')
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError,
  onCreateSuccess,
  onSignOutSuccess,
  onCreateGameSuccess,
  onGetGamesSuccess,
  onGetGameSuccess,
  onJoinGameSuccess,
  onUpdateGameStateSuccess
}
