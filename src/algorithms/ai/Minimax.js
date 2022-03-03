/**
 *
 * @param {*} node description of game state
 * @param {Number} depth limit to the search depth
 * @param {Number} player player id, either 0 or 1
 * @returns game state resulting from the best found move
 */
function minimax(node, depth, player) {
  if (depth === 0 || terminal_state(node)) {
    return this.heuristic(node, player), node; // pretend there is a heuristic function supplies
  }
  opt = player == 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;

  opt_node = undefined;

  for (const child in node.possibleStates()) { // pretend there is node.possibleStates
    nextPlayer = player === 1 ? 0 : 1;

    value, _ = minimax(move, depth - 1, nextPlayer);

    if (player === 0) {
      if (value < optimal) {
        optimal = value;
        opt_node = child;
      }
    } else {
      if (value > optimal) {
        optimal = value;
        opt_node = child;
      }
    }
  }
  return optimal, opt_node;
}

/* inspired by Python...

    def minimax(self, node: Node, depth: int, player: int):
        if depth == 0 or self.is_terminal_state(node):
            return self.h(node, player), node

        opt = math.inf if (player != 0) else -math.inf
        opt_node = None
        for child in node.compute_and_get_children():
            # test all possible moves
            h, _ = self.minimax(child, depth-1, player ^ 1)
            if player != 0:
                if h > opt:
                    opt = h
                    opt_node = child
            else:
                if h < opt:
                    opt = h
                    opt_node = child

        return opt, opt_node

*/
