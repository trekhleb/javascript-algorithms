import genetic from '../genetic';

describe('genetic', () => {
  it('should return correct results', () => {
    //Test to see if desired word is generated.
    expect(genetic()).toBeTruthy();
  });
});
