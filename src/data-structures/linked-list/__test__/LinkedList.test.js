import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    const node1 = linkedList.append({ value: 1 });
    const node2 = linkedList.append({ value: 2, key: 'test' });

    expect(node1.value).toBe(1);
    expect(node2.value).toBe(2);
    expect(node2.key).toBe('test');

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('test:2');

    expect(linkedList.toString()).toBe('1,test:2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    const node1 = linkedList.append({ value: 1 });
    const node2 = linkedList.prepend({ value: 2 });

    expect(node1.value).toBe(1);
    expect(node2.value).toBe(2);

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('1');

    expect(linkedList.toString()).toBe('2,1');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append({ value: 1 });
    linkedList.append({ value: 2 });
    linkedList.append({ value: 3 });
    linkedList.append({ value: 3 });
    linkedList.append({ value: 3 });
    linkedList.append({ value: 4 });
    linkedList.append({ value: 5 });

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');

    const deletedNode = linkedList.deleteByValue(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2,4,5');

    linkedList.deleteByValue(3);
    expect(linkedList.toString()).toBe('1,2,4,5');

    linkedList.deleteByValue(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.deleteByValue(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList.deleteByValue(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
  });

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList();

    linkedList.append({ value: 1 });
    linkedList.append({ value: 2 });

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1.value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('1');

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2.value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should delete node by key from linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append({ value: 1, key: 'test1' });
    linkedList.append({ value: 2, key: 'test2' });
    linkedList.append({ value: 3, key: 'test3' });

    const deletedNode = linkedList.deleteByKey('test2');
    expect(deletedNode.key).toBe('test2');
    expect(linkedList.toString()).toBe('test1:1,test3:3');
  });

  it('should append unique nodes', () => {
    const linkedList = new LinkedList();

    linkedList.appendUnique({ value: 1, key: 'test1' });
    linkedList.appendUnique({ value: 2, key: 'test2' });
    linkedList.appendUnique({ value: 3, key: 'test2' });

    expect(linkedList.toString()).toBe('test1:1,test2:3');
  });

  it('should find node by its key', () => {
    const linkedList = new LinkedList();

    linkedList.appendUnique({ value: 1, key: 'test1' });
    linkedList.appendUnique({ value: 2, key: 'test2' });
    linkedList.appendUnique({ value: 3, key: 'test3' });

    expect(linkedList.findByKey('test3').toString()).toBe('test3:3');
  });
});
