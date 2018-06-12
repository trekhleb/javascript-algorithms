import liuHui from '../liuHui';

describe('liHui', () => {
  it('Dodecagon π', () => {
    expect(liuHui(1)).toBe(3);
  });

  it('24-gon π', () => {
    expect(liuHui(2)).toBe(3.105828541230249);
  });

  it('6144-gon π', () => {
    expect(liuHui(10)).toBe(3.1415921059992717);
  });

  it('201326592-gon π', () => {
    expect(liuHui(25)).toBe(3.141592653589793);
  });
});
