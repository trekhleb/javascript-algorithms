import PriorityQueue from '../PriorityQueue';

describe('PriorityQueue', () => {
  it('should create default priority queue', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue).toBeDefined();
  });

  it('should insert items to the queue and respect priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);
  });

  it('should poll from queue with respect to priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });
});
