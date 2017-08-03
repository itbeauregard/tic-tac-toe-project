'use strict'

const app = require('../store.js')

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

const onCreateGameSuccess = function () {
  console.log('createGameSuccess from ui.js ran!')
}

const onGetGamesSuccess = function (data) {
  app.data = data.user
  console.log(data)
  console.log('getGames from ui.js ran!')
}

const onGetGameSuccess = function (data) {
  app.data = data.user
  console.log(data)
  console.log('getGames from ui.js ran!')
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError,
  onCreateSuccess,
  onCreateGameSuccess,
  onGetGamesSuccess,
  onGetGameSuccess
}
