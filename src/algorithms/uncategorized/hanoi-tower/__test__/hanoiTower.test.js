import hanoiTower from '../hanoiTower';
import Stack from '../../../../data-structures/stack/Stack';

describe('hanoiTower', () => {
  it('should solve tower of hanoi puzzle with 2 discs', () => {
    const moveCallback = jest.fn();
    const numberOfDiscs = 2;

    const fromPole = new Stack();
    const withPole = new Stack();
    const toPole = new Stack();

    hanoiTower({
      numberOfDiscs,
      moveCallback,
      fromPole,
      withPole,
      toPole,
    });

    expect(moveCallback).toHaveBeenCalledTimes((2 ** numberOfDiscs) - 1);

    expect(fromPole.toArray()).toEqual([]);
    expect(toPole.toArray()).toEqual([1, 2]);

    expect(moveCallback.mock.calls[0][0]).toBe(1);
    expect(moveCallback.mock.calls[0][1]).toEqual([1, 2]);
    expect(moveCallback.mock.calls[0][2]).toEqual([]);

    expect(moveCallback.mock.calls[1][0]).toBe(2);
    expect(moveCallback.mock.calls[1][1]).toEqual([2]);
    expect(moveCallback.mock.calls[1][2]).toEqual([]);

    expect(moveCallback.mock.calls[2][0]).toBe(1);
    expect(moveCallback.mock.calls[2][1]).toEqual([1]);
    expect(moveCallback.mock.calls[2][2]).toEqual([2]);
  });

  it('should solve tower of hanoi puzzle with 3 discs', () => {
    const moveCallback = jest.fn();
    const numberOfDiscs = 3;

    hanoiTower({
      numberOfDiscs,
      moveCallback,
    });

    expect(moveCallback).toHaveBeenCalledTimes((2 ** numberOfDiscs) - 1);
  });

  it('should solve tower of hanoi puzzle with 6 discs', () => {
    const moveCallback = jest.fn();
    const numberOfDiscs = 6;

    hanoiTower({
      numberOfDiscs,
      moveCallback,
    });

    expect(moveCallback).toHaveBeenCalledTimes((2 ** numberOfDiscs) - 1);
  });
});
