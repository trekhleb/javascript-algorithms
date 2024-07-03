import QueenPosition from '../QueenPosition';

describe('QueenPosition', () => {
  it('should store queen position on chessboard', () => {
    const position1 = new QueenPosition(0, 0);
    const position2 = new QueenPosition(2, 1);

    expect(position2.columnIndex).toBe(1);
    expect(position2.rowIndex).toBe(2);
    expect(position1.leftDiagonal).toBe(0);
    expect(position1.rightDiagonal).toBe(0);
    expect(position2.leftDiagonal).toBe(1);
    expect(position2.rightDiagonal).toBe(3);
    expect(position2.toString()).toBe('2,1');
  });
});
