import squareRoot from '../squareRoot';

describe('squareRoot', () => {
  it('should throw for negative numbers', () => {
    function failingSquareRoot() {
      squareRoot(-5);
    }
    expect(failingSquareRoot).toThrow();
  });

  it('should correctly calculate square root with default tolerance', () => {
    expect(squareRoot(0)).toBe(0);
    expect(squareRoot(1)).toBe(1);
    expect(squareRoot(2)).toBe(1);
    expect(squareRoot(3)).toBe(2);
    expect(squareRoot(4)).toBe(2);
    expect(squareRoot(15)).toBe(4);
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(256)).toBe(16);
    expect(squareRoot(473)).toBe(22);
    expect(squareRoot(14723)).toBe(121);
  });

  it('should correctly calculate square root for integers with custom tolerance', () => {
    let tolerance = 1;

    expect(squareRoot(0, tolerance)).toBe(0);
    expect(squareRoot(1, tolerance)).toBe(1);
    expect(squareRoot(2, tolerance)).toBe(1.4);
    expect(squareRoot(3, tolerance)).toBe(1.8);
    expect(squareRoot(4, tolerance)).toBe(2);
    expect(squareRoot(15, tolerance)).toBe(3.9);
    expect(squareRoot(16, tolerance)).toBe(4);
    expect(squareRoot(256, tolerance)).toBe(16);
    expect(squareRoot(473, tolerance)).toBe(21.7);
    expect(squareRoot(14723, tolerance)).toBe(121.3);

    tolerance = 3;

    expect(squareRoot(0, tolerance)).toBe(0);
    expect(squareRoot(1, tolerance)).toBe(1);
    expect(squareRoot(2, tolerance)).toBe(1.414);
    expect(squareRoot(3, tolerance)).toBe(1.732);
    expect(squareRoot(4, tolerance)).toBe(2);
    expect(squareRoot(15, tolerance)).toBe(3.873);
    expect(squareRoot(16, tolerance)).toBe(4);
    expect(squareRoot(256, tolerance)).toBe(16);
    expect(squareRoot(473, tolerance)).toBe(21.749);
    expect(squareRoot(14723, tolerance)).toBe(121.338);

    tolerance = 10;

    expect(squareRoot(0, tolerance)).toBe(0);
    expect(squareRoot(1, tolerance)).toBe(1);
    expect(squareRoot(2, tolerance)).toBe(1.4142135624);
    expect(squareRoot(3, tolerance)).toBe(1.7320508076);
    expect(squareRoot(4, tolerance)).toBe(2);
    expect(squareRoot(15, tolerance)).toBe(3.8729833462);
    expect(squareRoot(16, tolerance)).toBe(4);
    expect(squareRoot(256, tolerance)).toBe(16);
    expect(squareRoot(473, tolerance)).toBe(21.7485631709);
    expect(squareRoot(14723, tolerance)).toBe(121.3383698588);
  });

  it('should correctly calculate square root for integers with custom tolerance', () => {
    expect(squareRoot(4.5, 10)).toBe(2.1213203436);
    expect(squareRoot(217.534, 10)).toBe(14.7490338667);
  });
});
