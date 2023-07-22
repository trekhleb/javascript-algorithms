export default class Player {
  /**
   * @param {GameNode} node One node of the game tree. Description of a game state
   */
  findBestMove() {
    throw new Error('Player::findBestMove must be implemented');
  }
}
