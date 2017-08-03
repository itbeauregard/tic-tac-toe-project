'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');
//
const accountEvents = require('./accounts/events')
const gameLogic = require('./gameLogic')

// TODO 1. understand how the back end logic works and connects to inputs
//      2. Display user's game stats
//      3. How will this be played? Are we trying to create a game played online
//      4.a. Do I need to work curl requests into this somehow? Or is curl just
//        for testing in the terminal?

// On document ready
$(() => {
  $('#account-login').on('submit', accountEvents.onLogin)
  $('#change-password').on('submit', accountEvents.onChangePassword)
  $('#create-account').on('submit', accountEvents.onCreateAccount)
  $('#account-signout').on('submit', accountEvents.onSignOut)
  $('#createGame').on('submit', accountEvents.onCreateGame)
  $('#getGames').on('submit', accountEvents.onGetGames)
  $('#login').on('click', gameLogic.login)
  // $('#create-account').hide()
  // $('#change-password').hide()
  // $('#stalemate-display').hide()
  // $('#win-display').hide()
  // $('#game-board').hide()
  // $('#restart').hide()

  $('#reveal-change-password').on('click', gameLogic.showChangePassword)
  $('#reveal-new-account').on('click', gameLogic.showCreateAccount)
  // On click, run markCell function from the gameLogic file
  $('.cell').on('click', function () {
    gameLogic.markCell(parseInt(this.id))
  })
  $('#restart').on('click', gameLogic.restartGame)
})
