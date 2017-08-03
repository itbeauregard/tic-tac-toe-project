'use strict'

const app = require('../store.js')

const loginAccount = function (id) {
  return $.ajax({
    url: app.host + '/sign-in/' + id,
    method: 'GET',
    header: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    header: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const createAccount = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/' + app.user.id,
    method: 'POST',
    data: data
  })
}

module.exports = {
  loginAccount,
  changePassword,
  createAccount
}
