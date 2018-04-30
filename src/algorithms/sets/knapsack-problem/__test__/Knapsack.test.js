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

  it('should solve unbound knapsack problem', () => {
    const possibleKnapsackItems = [
      new KnapsackItem({ value: 84, weight: 7 }), // v/w ratio is 12
      new KnapsackItem({ value: 5, weight: 2 }), // v/w ratio is 2.5
      new KnapsackItem({ value: 12, weight: 3 }), // v/w ratio is 4
      new KnapsackItem({ value: 10, weight: 1 }), // v/w ratio is 10
      new KnapsackItem({ value: 20, weight: 2 }), // v/w ratio is 10
    ];

    const maxKnapsackWeight = 17;

    const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveUnboundedKnapsackProblem();

    expect(knapsack.totalValue).toBe(84 + 84 + 20 + 10);
    expect(knapsack.totalWeight).toBe(17);
    expect(knapsack.selectedItems.length).toBe(3);
    expect(knapsack.selectedItems[0].toString()).toBe('v84 w7 x 2');
    expect(knapsack.selectedItems[1].toString()).toBe('v20 w2 x 1');
    expect(knapsack.selectedItems[2].toString()).toBe('v10 w1 x 1');
  });
});
