import pi from '../liu-hui-pi';

describe('Liu Hui\'s π algorithm', () => {
  it('Dodecagon π', () => {
    expect(pi(1)).toBe(3);
  });
  it('24-gon π', () => {
    expect(pi(2)).toBe(3.105828541230249);
  });
  it('6144-gon π', () => {
    expect(pi(10)).toBe(3.1415921059992717);
  });
  it('201326592-gon π', () => {
    expect(pi(25)).toBe(3.141592653589793);
  });
});
