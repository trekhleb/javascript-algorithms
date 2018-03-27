import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeDefined();
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.prepend(3);
    expect(linkedList.toString()).toBe('3,1,2');
  });
});
