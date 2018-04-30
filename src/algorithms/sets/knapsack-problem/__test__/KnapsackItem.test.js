import KnapsackItem from '../KnapsackItem';

describe('KnapsackItem', () => {
  it('should create knapsack item and count its total weight and value', () => {
    const item1 = new KnapsackItem({ value: 3, weight: 2 });

    expect(item1.value).toBe(3);
    expect(item1.weight).toBe(2);
    expect(item1.quantity).toBe(1);
    expect(item1.toString()).toBe('v3 w2 x 1');
    expect(item1.totalValue).toBe(3);
    expect(item1.totalWeight).toBe(2);

    item1.quantity = 0;

    expect(item1.value).toBe(3);
    expect(item1.weight).toBe(2);
    expect(item1.quantity).toBe(0);
    expect(item1.toString()).toBe('v3 w2 x 0');
    expect(item1.totalValue).toBe(0);
    expect(item1.totalWeight).toBe(0);

    item1.quantity = 2;

    expect(item1.value).toBe(3);
    expect(item1.weight).toBe(2);
    expect(item1.quantity).toBe(2);
    expect(item1.toString()).toBe('v3 w2 x 2');
    expect(item1.totalValue).toBe(6);
    expect(item1.totalWeight).toBe(4);
  });
});
