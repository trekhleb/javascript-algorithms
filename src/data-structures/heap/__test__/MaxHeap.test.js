import MaxHeap from '../MaxHeap';
import Comparator from '../../../utils/comparator/Comparator';

describe('MaxHeap', () => {
  it('should create an empty max heap', () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).toBeDefined();
    expect(maxHeap.peek()).toBeNull();
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

    expect(maxHeap.poll()).toBeNull();
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

  it('should be possible to find item indices in heap', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).toBe('12,11,10,3,11');

    expect(maxHeap.find(5)).toEqual([]);
    expect(maxHeap.find(12)).toEqual([0]);
    expect(maxHeap.find(11)).toEqual([1, 4]);
  });

  it('should be possible to remove items from heap with heapify down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).toBe('12,11,10,3,11');

    expect(maxHeap.remove(12).toString()).toEqual('11,11,10,3');
    expect(maxHeap.remove(12).peek()).toEqual(11);
    expect(maxHeap.remove(11).toString()).toEqual('10,3');
    expect(maxHeap.remove(10).peek()).toEqual(3);
  });

  it('should be possible to remove items from heap with heapify up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(5);
    maxHeap.add(6);
    maxHeap.add(7);
    maxHeap.add(4);
    maxHeap.add(6);
    maxHeap.add(8);
    maxHeap.add(2);
    maxHeap.add(1);

    expect(maxHeap.toString()).toBe('10,8,6,7,6,4,5,3,2,1');
    expect(maxHeap.remove(4).toString()).toEqual('10,8,6,7,6,1,5,3,2');
    expect(maxHeap.remove(3).toString()).toEqual('10,8,6,7,6,1,5,2');
    expect(maxHeap.remove(5).toString()).toEqual('10,8,6,7,6,1,2');
    expect(maxHeap.remove(10).toString()).toEqual('8,7,6,2,6,1');
    expect(maxHeap.remove(6).toString()).toEqual('8,7,1,2');
    expect(maxHeap.remove(2).toString()).toEqual('8,7,1');
    expect(maxHeap.remove(1).toString()).toEqual('8,7');
    expect(maxHeap.remove(7).toString()).toEqual('8');
    expect(maxHeap.remove(8).toString()).toEqual('');
  });

  it('should be possible to remove items from heap with custom finding comparator', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add('a');
    maxHeap.add('bb');
    maxHeap.add('ccc');
    maxHeap.add('dddd');

    expect(maxHeap.toString()).toBe('dddd,ccc,bb,a');

    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    maxHeap.remove('hey', comparator);
    expect(maxHeap.toString()).toBe('dddd,a,bb');
  });
});
