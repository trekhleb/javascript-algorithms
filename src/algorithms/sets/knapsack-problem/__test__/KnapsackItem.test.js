import KnapsackItem from '../KnapsackItem';

describe('KnapsackItem', () => {
  it('should create knapsack item and count its total weight and value', () => {
    const knapsackItem = new KnapsackItem({ value: 3, weight: 2 });

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(1);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 1');
    expect(knapsackItem.totalValue).toBe(3);
    expect(knapsackItem.totalWeight).toBe(2);

    knapsackItem.quantity = 0;

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(0);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 0');
    expect(knapsackItem.totalValue).toBe(0);
    expect(knapsackItem.totalWeight).toBe(0);

    knapsackItem.quantity = 2;

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(2);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 2');
    expect(knapsackItem.totalValue).toBe(6);
    expect(knapsackItem.totalWeight).toBe(4);
  });
});
