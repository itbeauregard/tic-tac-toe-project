'use strict'

const app = require('../store.js')
const config = require('../config.js')

const loginAccount = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log(app.user)
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
  console.log('createAccount from api.js ran!')
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
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
    data
  })
}

const getGames = function (data) {
  console.log('getGames from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games[?over=]',
    method: 'GET',
    header: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getGame = function (data) {
  console.log('getGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games' + app.user.id,
    method: 'GET',
    header: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

// TODO check whether I should be passing in data here
const joinGame = function (data) {
  console.log('joinGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games' + app.user.id,
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
  joinGame
}
