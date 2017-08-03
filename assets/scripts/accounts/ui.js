'use strict'

const onSuccess = function (data) {
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
  console.log(data.account)
}

const createGameSuccess = (data) => {
  console.log('createGameSuccess from ui.js ran!')
}

const createGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError,
  onCreateSuccess,
  createGameSuccess,
  createGameFailure
}
