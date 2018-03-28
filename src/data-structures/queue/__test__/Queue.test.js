import Queue from '../Queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it('should add data to queue', () => {
    const queue = new Queue();

    queue.add(1);
    queue.add(2);

    expect(queue.linkedList.toString()).toBe('1,2');
  });

  it('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();

    queue.add(1);
    queue.add(2);

    expect(queue.peek()).toBe(2);
    expect(queue.peek()).toBe(2);
  });

  it('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();

    queue.add(1);

    expect(queue.isEmpty()).toBeFalsy();
  });

  it('should remove from empty', () => {
    const queue = new Queue();

    queue.add(1);
    queue.add(2);

    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(1);
    expect(queue.isEmpty()).toBeTruthy();
  });
});
