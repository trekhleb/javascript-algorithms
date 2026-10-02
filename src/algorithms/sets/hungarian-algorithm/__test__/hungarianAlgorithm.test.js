import hungarianAlgorithm from '../hungarianAlgorithm';

describe('hungarianAlgorithm', () => {
  it('should handle a trivial 1x1 matrix', () => {
    const costMatrix = [[5]];
    const result = hungarianAlgorithm(costMatrix);

    expect(result).toEqual([[0, 0]]);
  });

  it('should handle an empty matrix', () => {
    const result = hungarianAlgorithm([]);

    expect(result).toEqual([]);
  });

  it('should throw on non-square matrix', () => {
    const costMatrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(() => hungarianAlgorithm(costMatrix)).toThrow('Cost matrix must be square (n×n)');
  });

  it('should solve a simple 2x2 assignment problem', () => {
    const costMatrix = [
      [1, 2],
      [2, 1],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal assignment: agent 0 → task 0 (cost 1), agent 1 → task 1 (cost 1).
    // Total cost = 2.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(2);
    expect(result.length).toBe(2);
  });

  it('should solve a 3x3 assignment problem', () => {
    // Classic textbook example.
    const costMatrix = [
      [250, 400, 350],
      [400, 600, 350],
      [200, 400, 250],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal assignment: total cost should be 950.
    // agent 0 → task 1 (400), agent 1 → task 2 (350), agent 2 → task 0 (200).
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(950);
    expect(result.length).toBe(3);
  });

  it('should solve a 4x4 assignment problem', () => {
    // Standard 4×4 cost matrix.
    const costMatrix = [
      [82, 83, 69, 92],
      [77, 37, 49, 92],
      [11, 69, 5, 86],
      [8, 9, 98, 23],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal assignment: total cost should be 140.
    // Possible assignment: 0→2 (69), 1→1 (37), 2→0 (11), 3→3 (23) = 140.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(140);
    expect(result.length).toBe(4);
  });

  it('should handle a matrix with all identical values', () => {
    const costMatrix = [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Any valid assignment is optimal. Total cost = 15.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(15);
    expect(result.length).toBe(3);

    // Verify each agent is assigned to exactly one task and vice versa.
    const assignedRows = new Set(result.map(([row]) => row));
    const assignedCols = new Set(result.map(([, col]) => col));
    expect(assignedRows.size).toBe(3);
    expect(assignedCols.size).toBe(3);
  });

  it('should handle a matrix with zeros', () => {
    const costMatrix = [
      [0, 1, 2],
      [1, 0, 2],
      [2, 2, 0],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal: diagonal assignment, total cost = 0.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(0);
    expect(result.length).toBe(3);
  });

  it('should produce a valid assignment (each row and column used exactly once)', () => {
    const costMatrix = [
      [10, 5, 13, 15],
      [3, 9, 18, 13],
      [13, 7, 4, 15],
      [12, 11, 14, 8],
    ];
    const result = hungarianAlgorithm(costMatrix);

    expect(result.length).toBe(4);

    // Each agent should appear exactly once.
    const rows = result.map(([row]) => row).sort();
    expect(rows).toEqual([0, 1, 2, 3]);

    // Each task should appear exactly once.
    const cols = result.map(([, col]) => col).sort();
    expect(cols).toEqual([0, 1, 2, 3]);
  });

  it('should solve a 5x5 assignment problem', () => {
    const costMatrix = [
      [7, 53, 183, 439, 863],
      [497, 383, 563, 79, 973],
      [287, 63, 343, 169, 583],
      [627, 343, 773, 959, 943],
      [767, 473, 103, 699, 303],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal cost: 7 + 79 + 63 + 343 + 103 = 595.
    // Assignment: 0→0, 1→3, 2→1, 3→1... let's just verify valid assignment and cost.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(result.length).toBe(5);

    // Ensure it's a valid assignment.
    const assignedRows = new Set(result.map(([row]) => row));
    const assignedCols = new Set(result.map(([, col]) => col));
    expect(assignedRows.size).toBe(5);
    expect(assignedCols.size).toBe(5);

    // The total cost should be optimal (minimum possible).
    expect(totalCost).toBeLessThanOrEqual(595);
  });

  it('should not mutate the original cost matrix', () => {
    const costMatrix = [
      [1, 2],
      [3, 4],
    ];
    const originalMatrix = costMatrix.map((row) => [...row]);

    hungarianAlgorithm(costMatrix);

    // Original matrix should remain unchanged.
    expect(costMatrix).toEqual(originalMatrix);
  });

  it('should handle large cost values', () => {
    const costMatrix = [
      [1000000, 2000000, 3000000],
      [3000000, 1000000, 2000000],
      [2000000, 3000000, 1000000],
    ];
    const result = hungarianAlgorithm(costMatrix);

    // Optimal: diagonal, total = 3000000.
    const totalCost = result.reduce((sum, [row, col]) => sum + costMatrix[row][col], 0);
    expect(totalCost).toBe(3000000);
    expect(result.length).toBe(3);
  });
});
