
// HOW page works
// 1. showing: login inputs and buttons, button for creating new account, button for changing password
// if click submit and password === true then #2
// if click create new account button then #3
// if click change password then #4

// 2. Hide login inputs and buttons, show game board
// if WIN, then show win animation, if stalemate, show stalemate animation
// both instances, show reset button

// 3. Hide login inputs and button, show create new account inputs and button. If click submit, return to #1

// 4. Hide login inputs and button, show change password inputs and button. If click submit, return to #1

// Create Player object

// has class
// create game board of 3 x 3
// let board = {}
// [0,0]:
// [0,1]:
// [0,2]:
// [1,0]:
// [1,1]:
// [1,2]:
// [2,0]:
// [2,1]:
// [2,2]:

// winning combos
// [0,0],[0,1],[0,2]
// [1,0],[1,1],[1,2]
// [2,0],[2,1],[2,2]

// const createBoard = function () {
//   for (let i = 0; i < 3; i++) {
//     const xCoord = i
//     for (let j = 0; j < 3; j++) {
//       const yCoord = j
//       board[`[${xCoord},${yCoord}]`] = ''
//     }
//   }
//   return board
// }

// winning combos
// if board[0], board[1], board[2]
// 3 4 5
// 6 7 8
// 0 3 6
// 1 4 7
// 2 5 8
// 0 4 8
// 2 4 6

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

const markCell = function (index) {
  // Checks if the board's cell is already marked, if false then proceeds
  if (game.isMarked(index) === false) {
    // Put an X or O in the cell
    $('#' + index).append(game.makeMove(index))
    // if > 5 moves have been made and there is a winner
    if (game.xoArray.length < 5 && game.isThereWinner()) {
      $('#game-board').hide()
      $('#win-display').show()
    // TODO reset board and xoArray arrays and redraw user board
    // Checks if xoArray is empty to check for stalemate
    } else if (game.xoArray.length === 0) {
      $('#game-board').hide()
      $('#stalemate-display').show()
    }
  }
}

const login = function () {
  // TODO run only if account information is valid
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('#game-board').show()
}

const showChangePassword = function () {
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('#change-password').show()
}

const showCreateAccount = function () {
  $('#account-login').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('#create-account').show()
}

module.exports = {
  markCell,
  login,
  showChangePassword,
  showCreateAccount
}
