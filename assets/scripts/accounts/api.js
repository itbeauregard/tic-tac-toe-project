'use strict'

const app = require('../store.js')

const show = function (id) {
  return $.ajax({
    url: app.host + '/accounts/' + id,
    method: 'GET'
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/accounts/' + data.account.id,
    method: 'PATCH',
    data: data
  })
}

const createAccount = function (data) {
  return $.ajax({
    url: app.host + '/accounts/' + data.account.id,
    method: 'POST',
    data: data
  })
}

module.exports = {
  show,
  changePassword,
  createAccount
}