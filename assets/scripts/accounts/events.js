'use strict'

const accountsApi = require('./api.js')
const accountsUi = require('./ui.js')
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
    accountsApi.loginAccount(account.id)
      .then(accountsUi.onSuccess)
      .catch(accountsUi.onError)
  } else {
    console.log('Please provide an account id!')
  }
}

// Where does event come from?
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // this is the form input { book: { 'author': ..., }}
  // {id: ..., 'author': ..., 'title': ...}
  accountsApi.changePassword(data) // returns a JQXhr object ($.ajax({}))
    .then(accountsUi.onUpdateSuccess)
    .catch(accountsUi.onError)
}

const onCreateAccount = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  accountsApi.createAccount(data)
    .then(accountsUi.onCreateSuccess)
    .catch(accountsUi.onError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  accountsApi.createAccount(data)
    .then(accountsUi.onCreateSuccess)
    .catch(accountsUi.onError)
}

module.exports = {
  onLogin,
  onChangePassword,
  onCreateAccount,
  onSignOut
}
