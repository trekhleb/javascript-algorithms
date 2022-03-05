import TicTacToeGameNode, { playerMark } from '../../TicTacToeGameNode';
import Minimax from '../Minimax';

describe('Minimax', () => {
  it('make decision under a normal state', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['_', '_', '_'],
    ];
    const initialNode = new TicTacToeGameNode(board, playerMark);
    const player = new Minimax();

    expect(player.findBestMove(initialNode)).toStrictEqual([2, 2]);
  });
});
