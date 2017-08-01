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

// On document ready
$(() => {
  $('#account-login').on('submit', accountEvents.onGetAccount)
  $('#change-password').on('submit', accountEvents.onUpdateAccount)
  $('#create-account').on('submit', accountEvents.onCreateAccount)
  $('#login').on('click', gameLogic.login)
  $('#create-account').hide()
  $('#change-password').hide()
  $('#stalemate-display').hide()
  $('#win-display').hide()
  $('#game-board').hide()
  $('#restart').hide()

  $('#reveal-change-password').on('click', gameLogic.showChangePassword)
  $('#reveal-new-account').on('click', gameLogic.showCreateAccount)
  // On click, run markCell function from the gameLogic file
  $('.cell').on('click', function () {
    gameLogic.markCell(parseInt(this.id))
  })
  $('#restart').on('click', gameLogic.restartGame)
})
