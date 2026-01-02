import karatsuba from '../karatsuba';

describe('karatsuba multiplication', () => {
  it('should multiply simple numbers correctly', () => {
    expect(karatsuba(0, 37)).toEqual(0);
    expect(karatsuba(1, 8)).toEqual(8);
    expect(karatsuba(5, 6)).toEqual(30);
  });

  it('should multiply larger numbers correctly', () => {
    expect(karatsuba(1234, 5678)).toEqual(7006652);
    expect(karatsuba(9182734, 726354172)).toEqual(6669917151266248);
  });
});
