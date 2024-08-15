import MaxHeap from '../MaxHeapAdhoc';

describe('MaxHeapAdhoc', () => {
  it('should create an empty max heap', () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).toBeDefined();
    expect(maxHeap.peek()).toBe(undefined);
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it('should add items to the heap and heapify it up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5');

    maxHeap.add(3);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5,3');

    maxHeap.add(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5');

    maxHeap.add(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    maxHeap.add(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1,1');
  });

  it('should poll items from the heap and heapify it down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(1);

    expect(maxHeap.toString()).toBe('11,10,5,3,1');

    expect(maxHeap.poll()).toBe(11);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1');

    expect(maxHeap.poll()).toBe(1);
    expect(maxHeap.toString()).toBe('');

    expect(maxHeap.poll()).toBe(undefined);
    expect(maxHeap.toString()).toBe('');
  });

  it('should heapify down through the right branch as well', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString()).toBe('12,3,10');

    maxHeap.add(11);
    expect(maxHeap.toString()).toBe('12,11,10,3');

    expect(maxHeap.poll()).toBe(12);
    expect(maxHeap.toString()).toBe('11,3,10');
  });
});
