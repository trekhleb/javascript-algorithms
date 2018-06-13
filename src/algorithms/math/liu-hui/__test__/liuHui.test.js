import liuHui from '../liuHui';

describe('liuHui', () => {
  it('should calculate π based on 12-gon', () => {
    expect(liuHui(1)).toBe(3);
  });

  it('should calculate π based on 24-gon', () => {
    expect(liuHui(2)).toBe(3.105828541230249);
  });

  it('should calculate π based on 6144-gon', () => {
    expect(liuHui(10)).toBe(3.1415921059992717);
  });

  it('should calculate π based on 201326592-gon', () => {
    expect(liuHui(25)).toBe(3.141592653589793);
  });
});
