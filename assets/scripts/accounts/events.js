'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onLogin = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.loginAccount(data)
    .then(ui.onLoginSuccess)
    .catch(ui.onLoginError)
}

// Where does event come from?
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this is the form input { book: { 'author': ..., }}
  // {id: ..., 'author': ..., 'title': ...}
  api.changePassword(data) // returns a JQXhr object ($.ajax({}))
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordError)
}

const onCreateAccount = function (event) {
  // Prevents page refresh
  event.preventDefault()
  const data = getFormFields(this)
  // Test that the passwords match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.onCreateAccountError("passwords don't match")
  } else {
    api.createAccount(data)
      .then(ui.onCreateAccountSuccess)
      .catch(ui.onCreateAccountError)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

const onUpdateGameState = function (data) {
  event.preventDefault()
  api.updateGameState(data)
    .then(ui.onUpdateGameStateSuccess)
    .catch(ui.onError)
}
//
// const onGetGame = function (event) {
//   event.preventDefault()
//   console.log('onGetGame from events.js ran!')
//   api.getGame()
//     .then(ui.onGetGameSuccess)
//     .catch(ui.onError)
// }
//
// const onJoinGame = function (event) {
//   event.preventDefault()
//   console.log('onJoinGame from events.js ran!')
//   api.joinGame()
//     .then(ui.onJoinGameSuccess)
//     .catch(ui.onError)
// }

module.exports = {
  onLogin,
  onChangePassword,
  onCreateAccount,
  onSignOut,
  onCreateGame,
  onGetGames,
  // onGetGame,
  // onJoinGame,
  onUpdateGameState
}
