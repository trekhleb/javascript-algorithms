import Player from '../Player';

class MinimaxPlayer extends Player {
  /**
   * Find the best move to perform in the current game state.
   * @param {GameNode} node - Description of game state
   */
  findBestMove(node) {
    let bestScore = Number.NEGATIVE_INFINITY;
    let bestMove = null;

    const nextNodes = node.computeNextStates();
    for (let i = 0; i < nextNodes.length; i += 1) {
      const nextNode = nextNodes[i];
      const score = this.minimax(nextNode, 10);

      if (score > bestScore) {
        bestScore = score;
        bestMove = nextNode.move;
      }
    }

    return bestMove;
  }

  /**
   * Calculate the heuristic value of current state.
   * @param {GameNode} node - Description of game state
   * @returns
   */
  heuristic(node) {
    return node.evaluate();
  }

  /**
   *
   * @param {*} node - Description of game state
   * @param {Number} depth - Limit to the search depth
   * @returns {Number} - Best score the player can reach under this state
   */
  minimax(node, depth) {
    if (depth === 0 || node.isTerminalState()) {
      return this.heuristic(node);
    }

    let optimal = node.isOpponentPlaying() ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    const nextNodes = node.computeNextStates();
    for (let i = 0; i < nextNodes.length; i += 1) {
      const nextNode = nextNodes[i];
      const score = this.minimax(nextNode, depth - 1);

      if (node.isOpponentPlaying()) {
        if (score < optimal) {
          optimal = score;
        }
      } else {
        if (score > optimal) {
          optimal = score;
        }
      }
    }
    return optimal;
  }
}

export default MinimaxPlayer;
