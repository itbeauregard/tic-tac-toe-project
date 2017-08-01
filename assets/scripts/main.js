
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

// Create array for X and O storage
let board = []
// draw 3 x 3 game board with numbers holding places
// TODO event handler
const startNewBoard = function () {
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

// test for every winning combo
// if board[0], board[1], board[2] are all the same
// 3 4 5
// 6 7 8
// 0 3 6
// 1 4 7
// 2 5 8
// 0 4 8
// 2 4 6
const isVictorious = function () {
  if ((board[0] === board[1] && board[1] === board[2]) || (board[3] === board[4] && board[4] === board[5]) || (board[6] === board[7] && board[7] === board[8]) || (board[0] === board[3] && board[3] === board[6]) || (board[1] === board[4] && board[4] === board[7]) || (board[2] === board[5] && board[5] === board[8]) || (board[0] === board[4] && board[4] === board[8]) || (board[2] === board[4] && board[4] === board[6])) {
    return true
  } else {
    return false
  }
}
let xoArray = []
// load X's and O's into array
const loadXO = function () {
  xoArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
}

// TODO event handler
// release an X or O to be associated with clicks
const makeMove = function (index) {
  board[index] = xoArray.pop()
}

const assessGame = function () {
  // if 5 moves have been made, test for win
  if (xoArray.length < 5) {
    if (isVictorious()) {
      // show victory screen
    }
  } else if (xoArray.length === 0) {
    // show stalemate screen
  }
}

const isMarked = function (index) {
  if (board[index] === 'X' || board[index] === 'O') {
    return true
  } else {
    return false
  }
}
// click handlers for game board
// if (click on board cell isMarked === false) {
//    makeMove(index)
// }

// test for win after five moves, first time a win could happen
  //    if ( moves > 5 ) {
  //      if ( three in a row) {
  //        run win page
  //      } else if (xoArray.length === 0)
  //        run stalemate page
  //      } else {
  //        continue game
  //      }
  //    }
