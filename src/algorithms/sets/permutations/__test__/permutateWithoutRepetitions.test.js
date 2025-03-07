import permutateWithoutRepetitions from '../permutateWithoutRepetitions';
import factorial from '../../../math/factorial/factorial';

describe('permutateWithoutRepetitions', () => {
  it('should permutate string', () => {
    const permutations1 = permutateWithoutRepetitions(['A']);
    expect(permutations1).toEqual([
      ['A'],
    ]);

    const permutations2 = permutateWithoutRepetitions(['A', 'B']);
    expect(permutations2.length).toBe(2);
    expect(permutations2).toEqual([
      ['A', 'B'],
      ['B', 'A'],
    ]);

    const permutations6 = permutateWithoutRepetitions(['A', 'A']);
    expect(permutations6.length).toBe(2);
    expect(permutations6).toEqual([
      ['A', 'A'],
      ['A', 'A'],
    ]);

    const permutations3 = permutateWithoutRepetitions(['A', 'B', 'C']);
    expect(permutations3.length).toBe(factorial(3));
    expect(permutations3).toEqual([
      ['A', 'B', 'C'],
      ['B', 'A', 'C'],
      ['B', 'C', 'A'],
      ['A', 'C', 'B'],
      ['C', 'A', 'B'],
      ['C', 'B', 'A'],
    ]);

    const permutations4 = permutateWithoutRepetitions(['A', 'B', 'C', 'D']);
    expect(permutations4.length).toBe(factorial(4));
    expect(permutations4).toEqual([
      ['A', 'B', 'C', 'D'],
      ['B', 'A', 'C', 'D'],
      ['B', 'C', 'A', 'D'],
      ['B', 'C', 'D', 'A'],
      ['A', 'C', 'B', 'D'],
      ['C', 'A', 'B', 'D'],
      ['C', 'B', 'A', 'D'],
      ['C', 'B', 'D', 'A'],
      ['A', 'C', 'D', 'B'],
      ['C', 'A', 'D', 'B'],
      ['C', 'D', 'A', 'B'],
      ['C', 'D', 'B', 'A'],
      ['A', 'B', 'D', 'C'],
      ['B', 'A', 'D', 'C'],
      ['B', 'D', 'A', 'C'],
      ['B', 'D', 'C', 'A'],
      ['A', 'D', 'B', 'C'],
      ['D', 'A', 'B', 'C'],
      ['D', 'B', 'A', 'C'],
      ['D', 'B', 'C', 'A'],
      ['A', 'D', 'C', 'B'],
      ['D', 'A', 'C', 'B'],
      ['D', 'C', 'A', 'B'],
      ['D', 'C', 'B', 'A'],
    ]);

    const permutations5 = permutateWithoutRepetitions(['A', 'B', 'C', 'D', 'E', 'F']);
    expect(permutations5.length).toBe(factorial(6));
  });
});
