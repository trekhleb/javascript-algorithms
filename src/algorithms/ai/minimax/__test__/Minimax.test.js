import TicTacToeGameNode, { opponentMark, playerMark } from '../../TicTacToeGameNode';
import Minimax from '../Minimax';

describe('Minimax', () => {
  it('player makes right decision under a normal state', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['_', '_', '_'],
    ];
    const initialNode = new TicTacToeGameNode(board, playerMark);
    const minimax = new Minimax();

    expect(minimax.findBestMove(initialNode)).toStrictEqual([2, 2]);
  });

  it('opponent makes right decision under a normal state', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['_', '_', '_'],
    ];
    const initialNode = new TicTacToeGameNode(board, opponentMark);
    const minimax = new Minimax();

    expect(minimax.findBestMove(initialNode)).toStrictEqual([2, 1]);
  });

  it('a finished game finds no moves', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['_', 'o', '_'],
    ];
    const initialNode = new TicTacToeGameNode(board, playerMark);
    const minimax = new Minimax();

    expect(minimax.findBestMove(initialNode)).toStrictEqual(null);
  });

  it('a game far from a terminating state finds moves', () => {
    const board = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ];
    const initialNode = new TicTacToeGameNode(board, opponentMark);
    const minimax = new Minimax();

    expect(minimax.findBestMove(initialNode)).not.toStrictEqual(null);
  });

  it('a full game board finds no moves', () => {
    const board = [
      ['x', 'o', 'o'],
      ['o', 'x', 'x'],
      ['x', 'x', 'o'],
    ];
    const initialNode = new TicTacToeGameNode(board, opponentMark);
    const minimax = new Minimax();

    expect(minimax.findBestMove(initialNode)).toStrictEqual(null);
  });
});
