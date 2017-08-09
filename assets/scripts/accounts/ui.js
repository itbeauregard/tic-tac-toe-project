'use strict'

const app = require('../store.js')
// const resourceWatcher = require('./resource-watcher-0.1.0.js')
const config = require('../config.js')
const gameLogic = require('../gameLogic.js')

const onLoginSuccess = function () {
  // TODO figure what should be here
  console.log('onLoginSuccess in ui.js ran!')
  gameLogic.login()
  // Welcome the user
}

const onLoginError = function (response) {
  console.log(response)
  $('#login-error').show()
  // add a warning that says the login id does not exist
  // add warning if login password is incorrect
  // reset to login page
}

const onChangePasswordSuccess = function () {
  console.log('You successfully updated the account!')
  gameLogic.login()
  $('#password-success').show()
}

const onChangePasswordError = function (response) {
  console.log(response)
  $('#password-error').show()
}

const onCreateSuccess = function (data) {
  console.log(data)
  console.log(data.account)
}

const onSignOutSuccess = function () {
  console.log('sign out successful')

}

const onCreateGameSuccess = function (data) {
  console.log(data)
  console.log('createGameSuccess from ui.js ran!')
}

const onGetGamesSuccess = function (data) {
  console.log(data)
  console.log('onGetGamesSuccess from ui.js ran!')
}

const onGetGameSuccess = function (data) {
  console.log(data)
  console.log('onGetGameSuccess from ui.js ran!')
}

const onJoinGameSuccess = function (data) {
  // app.user = data.user
  console.log(data)
  console.log('onJoinGameSuccess from ui.js ran!')
}

const onUpdateGameStateSuccess = function (data) {
  // app.user = data.user
  console.log(data)
  console.log('onUpdateGameStateSuccess from ui.js ran!')
}

const onError = function (response) {
  console.error(response)
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


module.exports = {
  onLoginSuccess,
  onLoginError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onCreateSuccess,
  onSignOutSuccess,
  onCreateGameSuccess,
  onGetGamesSuccess,
  onGetGameSuccess,
  onJoinGameSuccess,
  onUpdateGameStateSuccess,
  onError
}
