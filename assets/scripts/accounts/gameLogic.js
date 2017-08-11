// Create object to hold variables and callback functions
const game = {
  // Create array for game play storage of X and O
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // Create array from which to deploy X's and O's
  xoArray: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
  // Initialize the game board with number placeholders, representing:
  //  | 0 | 1 | 2 |
  //  | 3 | 4 | 5 |
  //  | 6 | 7 | 8 |
  resetBoard: function () {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  },
  // Initialize array that will deploy X's and O's
  resetXO: function () {
    this.xoArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
  },
  // Push an X or O from xoArray on the board array at the index
  makeMove: function (index) {
    this.board[index] = this.xoArray.pop()
    return this.board[index]
  },
  // Check whether the board cell at given index is already marked
  isMarked: function (index) {
    if (this.board[index] === 'X' || this.board[index] === 'O') {
      return true
    } else {
      return false
    }
  },
  // Run through every possible winning combination and check for match, return boolean
  // Winning combos: 0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8, 2 4 6
  isThereWinner: function () {
    const cell = this.board
    if ((cell[0] === cell[1] && cell[1] === cell[2]) || (cell[3] === cell[4] && cell[4] === cell[5]) || (cell[6] === cell[7] && cell[7] === cell[8]) || (cell[0] === cell[3] && cell[3] === cell[6]) || (cell[1] === cell[4] && cell[4] === cell[7]) || (cell[2] === cell[5] && cell[5] === cell[8]) || (cell[0] === cell[4] && cell[4] === cell[8]) || (cell[2] === cell[4] && cell[4] === cell[6])) {
      return true
    } else {
      return false
    }
  },
  assessGame: function () {
    // if 5 moves have been made, test for win
    if (this.xoArray.length < 5) {
      if (this.isVictorious()) {
        // show victory screen
      }
    } else if (this.xoArray.length === 0) {
      // show stalemate screen
    }
  }
}

const gameEvents = require('./events.js')

const markCell = function (index) {
  // Checks if the board's cell is already marked, if false then proceeds
  if (game.isMarked(index) === false) {
    const letter = game.makeMove(index)
    // Put an X or O in the cell
    $('#' + index).append(letter)
    const data = {
      'index': index,
      'value': letter,
      'over': false
    }
    // if > 5 moves have been made and there is a winner
    if (game.xoArray.length < 5 && game.isThereWinner()) {
      $('#game-board').hide()
      $('#winner').append(letter + ' WINS!')
      $('#win-display').show()
      data.over = true
    // TODO add API event
    // Checks if xoArray is empty to check for stalemate
    } else if (game.xoArray.length === 0) {
      $('#game-board').hide()
      $('#stalemate-display').show()
      data.over = true
    }
    console.log(data)
    gameEvents.onUpdateGameState(data)
  }
}

const loginScreen = function () {
  $('#account-login').show()
  $('#reveal-new-account').show()
  $('#reveal-change-password').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('#stalemate-display').hide()
  $('#win-display').hide()
  $('#game-board').hide()
  $('#restart').hide()
  $('#create-game').hide()
  $('#login-error').hide()
  $('#password-error').hide()
  $('#password-success').hide()
  $('#create-account-error').hide()
  $('#create-account-success').hide()
  $('#account-signout').hide()
  $('.game-stats').hide()
  $('#get-games').hide()
}

// Hides the login buttons and form, then shows the game board with a restart button
const login = function () {
  // TODO run only if account information is valid
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#create-game').show()
  $('#reveal-change-password').show()
  $('#account-signout').show()
}

const createGame = function () {
  game.resetBoard()
  game.resetXO()
  // redraw the visual game board
  for (let i = 0; i < 9; i++) {
    $('#' + i).empty()
  }
  // Reset the winner heading
  $('#winner').text('')
  // Added in case the user is pressing button from a victory or stalemate page
  $('#win-display').hide()
  $('#stalemate-display').hide()
  $('#game-board').show()
  $('#get-games').show()
  $('.game-stats').hide()
  $('td').empty()
}

const signOut = function () {
  loginScreen()
  $('#account-login').show()
}

// Hides the login inputs and shows a password change form
const showChangePassword = function () {
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('#change-password').show()
}

// Hides the login inputs and shows a create account form
const showCreateAccount = function () {
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('#create-account').show()
}

module.exports = {
  markCell,
  loginScreen,
  createGame,
  login,
  signOut,
  showChangePassword,
  showCreateAccount
}
