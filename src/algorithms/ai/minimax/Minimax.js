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
   * @returns {Number} - Best score the player can reach under this state
   */
  minimax(node, depth) {
    if (depth === 0 || node.isTerminalState()) {
      return [this.heuristic(node), null];
    }

    let optimal = node.isOpponentPlaying() ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    let optimal_node = null
    const nextNodes = node.computeNextStates();

    for (let i = 0; i < nextNodes.length; i += 1) {
      const nextNode = nextNodes[i];
      const [score, _] = this.minimax(nextNode, depth - 1);

      if (node.isOpponentPlaying()) {
        if (score < optimal) {
          optimal = score;
          optimal_node = nextNode;
        }
      } else {
        if (score > optimal) {
          optimal = score;
          optimal_node = nextNode;
        }
      }
    }
    return [optimal, optimal_node];
  }
}

export default MinimaxPlayer;
