import Stack from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });

  it('should stack data to stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('2,1');
  });

  it('should peek data from stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to push/pop objects', () => {
    const stack = new Stack();

    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });

    const stringifier = (value) => `${value.key}:${value.value}`;

    expect(stack.toString(stringifier)).toBe('key2:test2,key1:test1');
    expect(stack.pop().value).toBe('test2');
    expect(stack.pop().value).toBe('test1');
  });

  it('should be possible to convert stack to array', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
