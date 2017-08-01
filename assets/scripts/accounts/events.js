'use strict'

const accountsApi = require('./api.js')
const accountsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetAccount = function (event) {
  event.preventDefault()
  const account = getFormFields(event.target).account

  if (account.id.length !== 0) {
    accountsApi.show(account.id)
      .then(accountsUi.onSuccess)
      .catch(accountsUi.onError)
  } else {
    console.log('Please provide an account id!')
  }
}

// Where does event come from?
const onUpdateAccount = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // this is the form input { book: { 'author': ..., }}
  const account = data.account // {id: ..., 'author': ..., 'title': ...}

  if (account.id.length !== 0) {
    accountsApi.update(data) // returns a JQXhr object ($.ajax({}))
      .then(accountsUi.onUpdateSuccess)
      .catch(accountsUi.onError)
  } else {
    console.error('Please provide an account id!')
  }
}

const onCreateAccount = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  accountsApi.create(data)
    .then(accountsUi.onCreateSuccess)
    .catch(accountsUi.onError)
}

module.exports = {
  onGetAccount,
  onUpdateAccount,
  onCreateAccount
}
