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
  // Game board and xoArray arrays need to be initialized before this function
  $('.cell').on('click', function () {
    gameLogic.markCell(parseInt(this.id))
    console.log('you clicked cell number ' + this.id)
  })
  // $('#create-account').hide()
  // $('#change-password').hide()
})
