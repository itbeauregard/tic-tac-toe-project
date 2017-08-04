
# Tic Tac Toe Project

The tic tac toe app functions as a single page application using HTML and CSS with Bootstrap and Sass. The client side is managed by Javascript and jQuery. The back end uses an API with Ajax calls.

## Check out the page

The page was deployed on gitHub pages [at this address](https://itbeauregard.github.io/tic-tac-toe-project/).

## Development Process

The process started humbly with some [very](http://imgur.com/xhpasJE) [rough](http://imgur.com/uLqgW3B) [wireframes](http://imgur.com/rUGsj62). All I was certain about was that I wanted a cool font. I perused the Google Fonts collection for neat one.

I came up with some user stories that weren't too fancy:
* As a registered user, I want to be able to play a game and know when I finish the game.
* As an unregistered user, I would like to quickly sign up for an account.
* As a registered user, I would like to be able to change my password.
* As a registered user, I should be able to see my total games and score history.
* As a registered game player, I'd like to see some celebration when I am victorious.
* As a registered game player, I'd like to be able to restart my game while in the middle of a game.
* As a registered user, I'd like to be able to play this game with my friends while they are on their computers.

When it came to coding, I found the game logic easy to conceptualize. After the boggle challenge, I was feeling pretty confident with using arrays to store game data so that was what I started with. I had spent a significant amount of time following the WatchandCode series on making a todo list app and that tutorial gave me the idea to put a whole bunch of functions into an object with the arrays. I choose functions that were more directly related to manipulation of the arrays, such as the isMarked function that checks whether the board is marked at a particular index.

At a certain point, I got into a nice flow where I would make a form or element in the HTML, call it by ID in my index.js file, then call a callback function located in the gameLogic.js file.

I knew that with the API functions, it would be a similar flow. But I definitely got a bit hung up on creating the back end scripts. At this point, I'm not even sure if that was time well-spent.

As far as resources were concerned, I relied heavily on the library-api-guide and api-token-auth studies that are on gitHub. Both illustrate the concepts of cycling through the various files, daisy-chaining the functions together. It wasn't until my final night with this project that I became very comfortable with using console.log to understand my back end issues. Once I was confident that my front end game logic was great, I trusted that it wasn't going to break (at least as easily) like the back end kept doing.

## Unsolved Problems

1. Score history: I don't have any code right now that will display to the user what their score history is.

2. Get game(s), join game, update game state, and the resource watcher: The first three I think are just a matter of debugging my code because I wrote it when I didn't really know what I was typing. The resource watcher is a complicated series of functions that was given to us in the game project api guide and I don't have the foggiest notion of how it works. I would like to some day.

3. Cross platform compatibility: right now, my app is a bit too small for full screen and a bit too big for smart phone. I need to add in some media queries to adjust the size of the game for various window sizes.

4. Better design: I got my app to place where I don't hate looking at it, but I think it could certainly be more visually appealing. I'd like the buttons and their fonts to be a bit jazzier.
