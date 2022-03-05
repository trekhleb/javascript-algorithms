class GameNode {
  /**
   * @returns {boolean} - If it is the opponent's turn
   */
  isOpponentPlaying() {
    throw new Error('GameNode::isOpponentPlaying must be implemented');
  }

  /**
   * @returns {boolean} - If the game is terminated in the current state
   */
  isTerminalState() {
    throw new Error('GameNode::isTerminalState must be implemented');
  }

  /**
   * @returns {Object} - Get the move which caused this game state
   */
   getMove() {
    throw new Error('GameNode::getMove must be implemented');
  }

  /**
   * @returns {Array.<GameNode>} - Possible next states of the game tree
   */
  computeNextStates() {
    throw new Error('GameNode::computeNextStates must be implemented');
  }

  /**
   * @returns {Number} - Score of current state
   */
  evaluateState() {
    throw new Error('GameNode::evaluateState must be implemented');
  }
}

export default GameNode;
