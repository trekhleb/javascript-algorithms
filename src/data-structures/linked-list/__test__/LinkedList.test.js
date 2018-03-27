import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    const node1 = linkedList.append(1);
    const node2 = linkedList.append(2);

    expect(node1.value).toBe(1);
    expect(node2.value).toBe(2);

    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    const node1 = linkedList.append(1);
    const node2 = linkedList.prepend(2);

    expect(node1.value).toBe(1);
    expect(node2.value).toBe(2);

    expect(linkedList.toString()).toBe('2,1');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2,3,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');
  });
});
