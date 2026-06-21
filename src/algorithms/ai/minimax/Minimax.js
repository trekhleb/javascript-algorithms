import Player from '../Player';

class MinimaxPlayer extends Player {
  /**
   * Find the best move to perform in the current game state.
   * @param {GameNode} node - Description of game state
   */
  findBestMove(node, depth = 5) {
    // Default depth set low

    let [_, best_node] = this.minimax(node, depth);

    // If current state is terminal or depth == 0, then no move is possible
    if (best_node === null) {
      return null;
    }

    return best_node.getMove();
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
   * @param {GameNode} node - Description of game state
   * @param {Number} depth - Limit to the search depth
   * @returns {[Number, GameNode]} - Best score the player can reach under this
   * state, and the resulting game state
   */
  minimax(node, depth) {
    // Check whether search depth is reached
    // or if the state is terminal
    if (depth === 0 || node.isTerminalState()) {
      return [this.heuristic(node), null];
    }

    // One player is maximizing and the other play is minimizing
    // Their optimal values are initialized to numbers which will be replaced
    // as soon as any valid node is visited
    let optimal = node.isOpponentPlaying() ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    let optimal_node = null

    // Make a list of possible next states
    const nextNodes = node.computeNextStates();

    // Iterate over all possible next states
    // Choose the optimal score, from the perspective of current player
    for (let i = 0; i < nextNodes.length; i += 1) {
      const nextNode = nextNodes[i];

      // Recursively call minimax to find score of the next state
      const [score, _] = this.minimax(nextNode, depth - 1);

      // In this code, the "opponent" is the minimizing player
      // And the "player" is the maximizing player
      if (node.isOpponentPlaying()) {
        // optimal is set to min(score, optimal)
        if (score < optimal) {
          optimal = score;
          optimal_node = nextNode;
        }
      } else {
        // optimal is set to max(score, optimal)
        if (score > optimal) {
          optimal = score;
          optimal_node = nextNode;
        }
      }
    }
    // Return optimal score and resulting game state
    return [optimal, optimal_node];
  }
}

export default MinimaxPlayer;
