'use strict'

const app = require('../store.js')
// const resourceWatcher = require('./resource-watcher-0.1.0.js')
const config = require('../config.js')
// const gameLogic = require('./gameLogic.js')

// added this jQuery function from gameLogic to avoid a circular dependency
const login = function () {
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#change-password').hide()
  $('#create-game').show()
  $('#reveal-change-password').show()
  $('#account-signout').show()
}

const onLoginSuccess = function (data) {
  // TODO figure what should be here
  console.log('onLoginSuccess in ui.js ran!')
  login()
  app.user = data.user
  $('#login-error').hide()
  $('#create-account-success').hide()
  // Welcome the user
}

const onLoginError = function (response) {
  console.log(response)
  $('#login-error').show()
}

const onChangePasswordSuccess = function () {
  console.log('You successfully updated the account!')
  login()
  $('#password-success').show()
}

const onChangePasswordError = function (response) {
  console.log(response)
  $('#password-error').show()
}

const onCreateAccountSuccess = function (data) {
  console.log(data)
  console.log(data.account)
  $('#create-account-success').show()
  // Added to remove error message in case of user error
  $('#create-account-error').hide()
  $('#create-account').hide()
  $('#account-login').show()
  $('#reveal-change-password').show()
  $('#reveal-new-account').show()
}

const onCreateAccountError = function (response) {
  console.log(response)
  $('#create-account-error').show()
}

const onSignOutSuccess = function () {
  console.log('sign out successful')
  // credit to Coptia for this line
  app.user = null
}

const onCreateGameSuccess = function (data) {
  console.log(data)
  console.log('createGameSuccess from ui.js ran!')
  app.game = data.game
  app.game.id = data.game.id
  $('#password-success').hide()
}

const onGetGamesSuccess = function (data) {
  console.log(data)
  console.log('onGetGamesSuccess from ui.js ran!')
  // hide everything except the game stats
  // presuming that we can only click button from game board screen,
  //   victory or stalemate screen
  $('#reveal-change-password').hide()
  $('#stalemate-display').hide()
  $('#win-display').hide()
  $('#game-board').hide()
  $('#get-games').hide()
  $('.game-stats').show()
  // create variable to store game data array

  const gameArray = data.games
  let gameStatus
  // credit to Coptia for this looping idea
  gameArray.forEach(function (game) {
    // Return complete if the game is over
    if (game.over === true) {
      gameStatus = 'Complete'
    } else {
      gameStatus = 'Incomplete'
    }
    // TODO display winner somehow. Os tie Xs in number with winner
    // but how to record stalemate?
    $('.stats-table').append('<tr><td>' + game.id + '</td><td>' + gameStatus + '</td></tr>')
  })
}

const onUpdateGameStateSuccess = function (data) {
  console.log(data)
  console.log('onUpdateGameStateSuccess from ui.js ran!')
  // TODO If the game is over, update the win tally
}

const onError = function (response) {
  console.error(response)
}

// const onGetGameSuccess = function (data) {
//   console.log(data)
//   console.log('onGetGameSuccess from ui.js ran!')
// }
//
// const onJoinGameSuccess = function (data) {
//   // app.user = data.user
//   console.log(data)
//   console.log('onJoinGameSuccess from ui.js ran!')
// }

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
  onCreateAccountSuccess,
  onCreateAccountError,
  onSignOutSuccess,
  onCreateGameSuccess,
  onGetGamesSuccess,
  // onGetGameSuccess,
  // onJoinGameSuccess,
  onUpdateGameStateSuccess,
  onError
}
