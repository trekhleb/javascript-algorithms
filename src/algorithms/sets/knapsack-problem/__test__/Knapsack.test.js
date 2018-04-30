import Knapsack from '../Knapsack';
import KnapsackItem from '../KnapsackItem';

describe('Knapsack', () => {
  it('should solve 0/1 knapsack problem', () => {
    const possibleKnapsackItems = [
      new KnapsackItem({ value: 1, weight: 1 }),
      new KnapsackItem({ value: 4, weight: 3 }),
      new KnapsackItem({ value: 5, weight: 4 }),
      new KnapsackItem({ value: 7, weight: 5 }),
    ];

    const maxKnapsackWeight = 7;

    const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(9);
    expect(knapsack.totalWeight).toBe(7);
    expect(knapsack.selectedItems.length).toBe(2);
    expect(knapsack.selectedItems[0].toString()).toBe('v5 w4 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v4 w3 x 1');
  });

  it('should solve 0/1 knapsack problem regardless of items order', () => {
    const possibleKnapsackItems = [
      new KnapsackItem({ value: 5, weight: 4 }),
      new KnapsackItem({ value: 1, weight: 1 }),
      new KnapsackItem({ value: 7, weight: 5 }),
      new KnapsackItem({ value: 4, weight: 3 }),
    ];

    const maxKnapsackWeight = 7;

    const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(9);
    expect(knapsack.totalWeight).toBe(7);
    expect(knapsack.selectedItems.length).toBe(2);
    expect(knapsack.selectedItems[0].toString()).toBe('v5 w4 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v4 w3 x 1');
  });

  it('should solve 0/1 knapsack problem with impossible items set', () => {
    const possibleKnapsackItems = [
      new KnapsackItem({ value: 5, weight: 40 }),
      new KnapsackItem({ value: 1, weight: 10 }),
      new KnapsackItem({ value: 7, weight: 50 }),
      new KnapsackItem({ value: 4, weight: 30 }),
    ];

    const maxKnapsackWeight = 7;

    const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(0);
    expect(knapsack.totalWeight).toBe(0);
    expect(knapsack.selectedItems.length).toBe(0);
  });

  it('should solve 0/1 knapsack problem with all equal weights', () => {
    const possibleKnapsackItems = [
      new KnapsackItem({ value: 5, weight: 1 }),
      new KnapsackItem({ value: 1, weight: 1 }),
      new KnapsackItem({ value: 7, weight: 1 }),
      new KnapsackItem({ value: 4, weight: 1 }),
      new KnapsackItem({ value: 4, weight: 1 }),
      new KnapsackItem({ value: 4, weight: 1 }),
    ];

    const maxKnapsackWeight = 3;

    const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(16);
    expect(knapsack.totalWeight).toBe(3);
    expect(knapsack.selectedItems.length).toBe(3);
    expect(knapsack.selectedItems[0].toString()).toBe('v4 w1 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v5 w1 x 1');
    expect(knapsack.selectedItems[2].toString()).toBe('v7 w1 x 1');
  });
});
