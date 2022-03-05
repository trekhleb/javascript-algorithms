import GameNode from './GameNode';

export const playerMark = 'x';
export const opponentMark = 'o';
class TicTacToeGameNode extends GameNode {
  /**
   *
   * @param {Array.<Array.<string>>} board Board of a Tic-Tac-Toe game.
   * @param {string} currentPlayer Current player mark: 'x' or 'o'
   */
  constructor(board, currentPlayer) {
    super();

    if (!TicTacToeGameNode.isBoardValid(board)) throw new Error('Invalid board object!');
    if (currentPlayer !== 'x' && currentPlayer !== 'o') throw new Error('Invalid player: \'x\' or \'o\'');

    this.board = board;
    this.currentPlayer = currentPlayer;
    this.move = null;
  }

  /**
   * Check whether a board object is valid: 3*3 matrix of 'x', 'o' or '_'
   * @param {Array.<Array.<string>>} board Board of a Tic-Tac-Toe game.
   * @returns {boolean} - If the board is valid.
   */
  static isBoardValid(board) {
    let validCount = 0;
    if (Array.isArray(board) && board.length === 3) {
      for (let i = 0; i < 3; i += 1) {
        const row = board[i];
        if (Array.isArray(row) && row.length === 3) {
          for (let j = 0; j < 3; j += 1) {
            if (row[j] === 'x' || row[j] === 'o' || row[j] === '_') {
              validCount += 1;
            }
          }
        }
      }
    }
    return validCount === 9;
  }

  /**
   * @returns {boolean} - If it is the opponent's turn
   */
  isOpponentPlaying() {
    return this.currentPlayer === opponentMark;
  }

  /**
   * @returns {boolean} - If the game is terminated
   */
  isTerminalState() {
    if (!this.hasMoreMoves() || this.checkWin() !== null) return true;
    return false;
  }

  /**
   * @returns {boolean} - If there are empty grids on the board
   */
  hasMoreMoves() {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (this.board[i][j] === '_') return true;
      }
    }
    return false;
  }

  /**
   * @returns {Object} - Get the move which caused this game state
   */
   getMove() {
    return this.move;
  }

  /**
   *
   * @returns {string} - If the game is end with three consecutive mark on the board.
   *                     Return the player mark of winning ('x' or 'o'), otherwise return null.
   */
  checkWin() {
    const { board } = this;
    // Checking for rows
    for (let row = 0; row < 3; row += 1) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        if (board[row][0] === playerMark) return playerMark;
        if (board[row][0] === opponentMark) return opponentMark;
      }
    }

    // Checking for columns
    for (let col = 0; col < 3; col += 1) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        if (board[0][col] === playerMark) return playerMark;
        if (board[0][col] === opponentMark) return opponentMark;
      }
    }

    // Checking for diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] === playerMark) return playerMark;
      if (board[0][0] === opponentMark) return opponentMark;
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] === playerMark) return playerMark;
      if (board[0][2] === opponentMark) return opponentMark;
    }

    // Otherwise none of the players have won, return null
    return null;
  }

  /**
   * @returns {Number} - Score of current state
   */
  evaluate() {
    const win = this.checkWin();
    if (win === playerMark) return 10;
    if (win === opponentMark) return -10;
    return 0;
  }

  /**
   * @returns {Array.<GameNode>} - Possible next states of the game tree
   */
  computeNextStates() {
    if (this.isTerminalState()) return [];

    const nextPlayerMark = this.currentPlayer === playerMark ? opponentMark : playerMark;
    const nextStates = [];

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (this.board[i][j] === '_') {
          const newBoard = JSON.parse(JSON.stringify(this.board)); // Deep clone the board array
          newBoard[i][j] = this.currentPlayer; // Make the move

          const newNode = new TicTacToeGameNode(newBoard, nextPlayerMark);
          newNode.move = [i, j]; // Record the move
          nextStates.push(newNode); // Add the new state to result
        }
      }
    }

    return nextStates;
  }
}

export default TicTacToeGameNode;
