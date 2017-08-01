// title for TIC TAC TOE

// ENTRY PAGE
// input for username
// input for password
// button for submission

// CREATE ACCOUNT PAGE
// button/link to create new account
// input for username
// input for password
// second input for password, check to see if matches with first input
// button to create new account

// GAME PAGE
// 9 buttons that turn into X or O on click
    // store X or O in an array
    // array represents game board
    // if there are X's or O's three in a row, then end page
    //
    //   | 0 | 1 | 2 |
    //   | 3 | 4 | 5 |
    //   | 6 | 7 | 8 |

// need storage of X's and O's in array?
// criss-cross frame for game
// Game restart button
// Sign out button

// GAME END PAGE
// Display who won
// Celebration gif, animation, photo?
// Game restart button
// Sign out button


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
