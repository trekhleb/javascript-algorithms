import PriorityQueue from '../PriorityQueue';

const JOB1 = { type: 'job1' };
const JOB2 = { type: 'job2' };
const JOB3 = { type: 'job3' };
const JOB4 = { type: 'job4' };
const JOB5 = { type: 'job5' };

describe('PriorityQueue', () => {
  it('should create default priority queue', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue).toBeDefined();
  });

  it('should insert items to the queue and respect priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    expect(priorityQueue.peek()).toBe(JOB1);

    priorityQueue.add(JOB2, 2);
    expect(priorityQueue.peek()).toBe(JOB1);

    priorityQueue.add(JOB3, 0);
    expect(priorityQueue.peek()).toBe(JOB3);
  });

  it('should poll from queue with respect to priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);
    priorityQueue.add(JOB4, 0);

    expect(priorityQueue.poll()).toBe(JOB3);
    expect(priorityQueue.poll()).toBe(JOB4);
    expect(priorityQueue.poll()).toBe(JOB1);
    expect(priorityQueue.poll()).toBe(JOB2);
  });

  it('should be possible to change priority of internal nodes', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);
    priorityQueue.add(JOB4, 0);

    priorityQueue.changePriority(JOB4, 10);
    priorityQueue.changePriority(JOB1, 20);

    expect(priorityQueue.poll()).toBe(JOB3);
    expect(priorityQueue.poll()).toBe(JOB2);
    expect(priorityQueue.poll()).toBe(JOB4);
    expect(priorityQueue.poll()).toBe(JOB1);
  });

  it('should be possible to change priority of head node', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);
    priorityQueue.add(JOB4, 0);

    priorityQueue.changePriority(JOB3, 10);
    priorityQueue.changePriority(JOB1, 20);

    expect(priorityQueue.poll()).toBe(JOB4);
    expect(priorityQueue.poll()).toBe(JOB2);
    expect(priorityQueue.poll()).toBe(JOB3);
    expect(priorityQueue.poll()).toBe(JOB1);
  });

  it('should be possible to change priority along with node addition', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);
    priorityQueue.add(JOB4, 0);

    priorityQueue.changePriority(JOB4, 10);
    priorityQueue.changePriority(JOB1, 20);

    priorityQueue.add(JOB5, 15);

    expect(priorityQueue.poll()).toBe(JOB3);
    expect(priorityQueue.poll()).toBe(JOB2);
    expect(priorityQueue.poll()).toBe(JOB4);
    expect(priorityQueue.poll()).toBe(JOB5);
    expect(priorityQueue.poll()).toBe(JOB1);
  });

  it('should be possible to change the priority of a group of elements', () => {
    const A = 'a';
    const B = 'b';
    const jobA1 = { type: A, id: 1 };
    const jobB1 = { type: B, id: 2 };
    const jobB2 = { type: B, id: 3 };

    const priorityQueue = new PriorityQueue();

    priorityQueue.add(jobA1, 2);
    priorityQueue.add(jobB1, 8);
    priorityQueue.add(jobB2, 9);

    expect(priorityQueue.peek()).toBe(jobA1);

    const compareByType = (a, b) => {
      if (a.type === b.type) {
        return 0;
      }

      return a.type < b.type ? -1 : 1;
    };

    priorityQueue.changePriority({ type: B }, 1, compareByType);

    expect(priorityQueue.poll().type).toBe(B);
    expect(priorityQueue.poll().type).toBe(B);
  });

  it('should be possible to search in priority queue by value', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);
    priorityQueue.add(JOB4, 0);
    priorityQueue.add(JOB5, 15);

    const job6 = { type: 'job6' };

    expect(priorityQueue.hasValue(job6)).toBe(false);
    expect(priorityQueue.hasValue(JOB5)).toBe(true);
  });

  it('should accept a custom compareValue function', () => {
    const compareByType = (a, b) => {
      if (a.type === b.type) {
        return 0;
      }

      return a.type < b.type ? -1 : 1;
    };

    const priorityQueue = new PriorityQueue(compareByType);

    priorityQueue.add(JOB1, 1);
    priorityQueue.add(JOB2, 2);
    priorityQueue.add(JOB3, 0);

    const existingJobType = { type: 'job1' };
    const newJobType = { type: 'job4' };

    expect(priorityQueue.hasValue(existingJobType)).toBe(true);
    expect(priorityQueue.hasValue(newJobType)).toBe(false);
  });
});
