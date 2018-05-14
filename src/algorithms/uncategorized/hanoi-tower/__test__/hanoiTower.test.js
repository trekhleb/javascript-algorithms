import hanoiTower from '../hanoiTower';

describe('hanoiTower', () => {
  it('should solve tower of hanoi puzzle with 2 discs', () => {
    const moveCallbackMock = jest.fn();

    hanoiTower(2, moveCallbackMock);

    expect(moveCallbackMock).toHaveBeenCalledTimes(3);

    expect(moveCallbackMock.mock.calls[0][0]).toBe(1);
    expect(moveCallbackMock.mock.calls[0][1]).toEqual([1, 2]);
    expect(moveCallbackMock.mock.calls[0][2]).toEqual([]);

    expect(moveCallbackMock.mock.calls[1][0]).toBe(2);
    expect(moveCallbackMock.mock.calls[1][1]).toEqual([2]);
    expect(moveCallbackMock.mock.calls[1][2]).toEqual([]);

    expect(moveCallbackMock.mock.calls[2][0]).toBe(1);
    expect(moveCallbackMock.mock.calls[2][1]).toEqual([1]);
    expect(moveCallbackMock.mock.calls[2][2]).toEqual([2]);
  });

  it('should solve tower of hanoi puzzle with 3 discs', () => {
    const moveCallbackMock = jest.fn();

    hanoiTower(3, moveCallbackMock);

    expect(moveCallbackMock).toHaveBeenCalledTimes(7);
  });

  it('should solve tower of hanoi puzzle with 6 discs', () => {
    const moveCallbackMock = jest.fn();

    hanoiTower(6, moveCallbackMock);

    expect(moveCallbackMock).toHaveBeenCalledTimes(63);
  });
});
