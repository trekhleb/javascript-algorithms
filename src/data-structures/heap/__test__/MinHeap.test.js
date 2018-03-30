import MinHeap from '../MinHeap';

describe('MinHeap', () => {
  it('should create an empty min heap', () => {
    const minHeap = new MinHeap();

    expect(minHeap).toBeDefined();
    expect(minHeap.peek()).toBeNull();
  });

  it('should add items to the heap and heapify it up', () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    expect(minHeap.peek()).toBe(5);
    expect(minHeap.toString()).toBe('5');

    minHeap.add(3);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5');

    minHeap.add(10);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5,10');

    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,3,10,5');
  });

  it('should poll items from the heap and heapify it down', () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(1);

    expect(minHeap.toString()).toBe('1,3,10,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('10');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.toString()).toBe('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.toString()).toBe('');
  });
});
