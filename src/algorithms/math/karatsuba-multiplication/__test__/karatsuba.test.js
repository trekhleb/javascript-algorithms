import karatsuba from '../karatsuba';

describe('karatsuba multiplication', () => {
  xit('should multiply numbers correctly', () => {
    expect(karatsuba(1234, 5678)).toEqual(7006652);
  });
});
