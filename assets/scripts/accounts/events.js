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
  const data = getFormFields(event.target)
  const account = data.account

  if (account.id.length !== 0) {
    api.loginAccount(account.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide an account id!')
  }
}

// Where does event come from?
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // this is the form input { book: { 'author': ..., }}
  // {id: ..., 'author': ..., 'title': ...}
  api.changePassword(data) // returns a JQXhr object ($.ajax({}))
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onCreateAccount = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createAccount(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createAccount(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('createGame from events.js ran!')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('onGetGames from events.js ran!')
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

module.exports = {
  onLogin,
  onChangePassword,
  onCreateAccount,
  onSignOut,
  onCreateGame,
  onGetGames
}
