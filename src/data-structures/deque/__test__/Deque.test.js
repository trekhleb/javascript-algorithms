import Deque from '../Deque';

describe('Deque', () => {
  it('should create an empty deque', () => {
    const deque = new Deque();

    expect(deque).not.toBeNull();
    expect(deque.isEmpty()).toBe(true);
    expect(deque.size).toBe(0);
  });

  it('should peek at the front and back of an empty deque', () => {
    const deque = new Deque();

    expect(deque.peekFront()).toBeNull();
    expect(deque.peekBack()).toBeNull();
  });

  it('should return null when removing from an empty deque', () => {
    const deque = new Deque();

    expect(deque.removeFront()).toBeNull();
    expect(deque.removeBack()).toBeNull();
  });

  it('should add elements to the back and remove from the front (queue behaviour)', () => {
    const deque = new Deque();

    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);

    expect(deque.isEmpty()).toBe(false);
    expect(deque.size).toBe(3);
    expect(deque.peekFront()).toBe(1);
    expect(deque.peekBack()).toBe(3);

    expect(deque.removeFront()).toBe(1);
    expect(deque.removeFront()).toBe(2);
    expect(deque.removeFront()).toBe(3);
    expect(deque.removeFront()).toBeNull();
    expect(deque.isEmpty()).toBe(true);
  });

  it('should add elements to the front and remove from the back (reversed queue)', () => {
    const deque = new Deque();

    deque.addFront(1);
    deque.addFront(2);
    deque.addFront(3);

    expect(deque.size).toBe(3);
    expect(deque.peekFront()).toBe(3);
    expect(deque.peekBack()).toBe(1);

    expect(deque.removeBack()).toBe(1);
    expect(deque.removeBack()).toBe(2);
    expect(deque.removeBack()).toBe(3);
    expect(deque.removeBack()).toBeNull();
    expect(deque.isEmpty()).toBe(true);
  });

  it('should add elements to the front and remove from the front (stack behaviour)', () => {
    const deque = new Deque();

    deque.addFront('a');
    deque.addFront('b');
    deque.addFront('c');

    expect(deque.peekFront()).toBe('c');
    expect(deque.removeFront()).toBe('c');
    expect(deque.removeFront()).toBe('b');
    expect(deque.removeFront()).toBe('a');
    expect(deque.isEmpty()).toBe(true);
  });

  it('should support mixed addFront and addBack operations', () => {
    const deque = new Deque();

    // Build: [3, 1, 2, 4]
    deque.addBack(1);
    deque.addBack(2);
    deque.addFront(3);
    deque.addBack(4);

    expect(deque.size).toBe(4);
    expect(deque.peekFront()).toBe(3);
    expect(deque.peekBack()).toBe(4);
    expect(deque.toArray()).toEqual([3, 1, 2, 4]);
  });

  it('should support mixed removeFront and removeBack operations', () => {
    const deque = new Deque();

    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addBack(4);

    expect(deque.removeFront()).toBe(1);
    expect(deque.removeBack()).toBe(4);
    expect(deque.removeFront()).toBe(2);
    expect(deque.removeBack()).toBe(3);
    expect(deque.isEmpty()).toBe(true);
  });

  it('should handle a single element correctly', () => {
    const deque = new Deque();

    deque.addBack(42);

    expect(deque.size).toBe(1);
    expect(deque.peekFront()).toBe(42);
    expect(deque.peekBack()).toBe(42);

    expect(deque.removeFront()).toBe(42);
    expect(deque.isEmpty()).toBe(true);
    expect(deque.peekFront()).toBeNull();
    expect(deque.peekBack()).toBeNull();
  });

  it('should handle object values', () => {
    const deque = new Deque();

    const obj1 = { key: 'value1' };
    const obj2 = { key: 'value2' };

    deque.addBack(obj1);
    deque.addFront(obj2);

    expect(deque.peekFront()).toEqual({ key: 'value2' });
    expect(deque.peekBack()).toEqual({ key: 'value1' });
    expect(deque.removeFront()).toEqual({ key: 'value2' });
    expect(deque.removeFront()).toEqual({ key: 'value1' });
  });

  it('should convert to array correctly', () => {
    const deque = new Deque();

    expect(deque.toArray()).toEqual([]);

    deque.addBack(1);
    deque.addBack(2);
    deque.addFront(0);

    expect(deque.toArray()).toEqual([0, 1, 2]);
  });

  it('should convert to string correctly', () => {
    const deque = new Deque();

    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);

    expect(deque.toString()).toBe('1,2,3');
  });

  it('should convert to string with a custom callback', () => {
    const deque = new Deque();

    deque.addBack({ value: 1, key: 'test1' });
    deque.addBack({ value: 2, key: 'test2' });

    const toString = (value) => `${value.key}:${value.value}`;

    expect(deque.toString(toString)).toBe('test1:1,test2:2');
  });

  it('should track size correctly after many operations', () => {
    const deque = new Deque();

    expect(deque.size).toBe(0);

    deque.addBack(1);
    expect(deque.size).toBe(1);

    deque.addFront(0);
    expect(deque.size).toBe(2);

    deque.removeFront();
    expect(deque.size).toBe(1);

    deque.removeBack();
    expect(deque.size).toBe(0);

    deque.removeBack();
    expect(deque.size).toBe(0);
  });
});
