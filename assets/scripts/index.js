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
  // will need to clear page to login to start game
  $('#account-signout').on('submit', accountEvents.onSignOut)
  $('#create-game').on('submit', accountEvents.onCreateGame)
  $('#get-games').on('submit', accountEvents.onGetGames)
  $('#get-game').on('submit', accountEvents.onGetGame)
  $('#join-game').on('submit', accountEvents.onJoinGame)
  $('#update-game-state').on('submit', accountEvents.onUpdateGameState)
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
  $('#createGame').on('click', gameLogic.restartGame)
})
