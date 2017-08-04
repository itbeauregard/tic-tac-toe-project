'use strict'

const app = require('../store.js')
const config = require('../config.js')

const loginAccount = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const changePassword = function (data) {
  console.log(data)
  console.log(app.user)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const createAccount = function (data) {
  console.log('createAccount from api.js ran!')
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createGame = function (data) {
  console.log('createGame from api.js ran!')
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getGames = function (data) {
  console.log('getGames from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games[?over=]',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getGame = function (data) {
  console.log('getGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

// TODO check whether I should be passing in id here
const joinGame = function (id) {
  console.log('joinGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games/' + app.user.id,
    method: 'PATCH'
  })
}

const updateGameState = function (data) {
  console.log('updateGameState from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games/' + app.user.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  loginAccount,
  changePassword,
  createAccount,
  signOut,
  createGame,
  getGames,
  getGame,
  joinGame,
  updateGameState
}
