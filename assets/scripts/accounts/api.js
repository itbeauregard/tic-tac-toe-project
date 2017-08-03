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
    header: "Content-Type: application/json",
    data: data
  })
}

const signOut = function (id) {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    header: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createGame = function (data) {
  console.log('createGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    header: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  loginAccount,
  changePassword,
  createAccount,
  signOut,
  createGame
}
