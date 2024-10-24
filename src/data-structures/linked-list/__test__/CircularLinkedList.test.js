import CircularLinkedList from '../CircularLinkedList'; // ES6 import

describe('CircularLinkedList', () => {
  it('should append values correctly', () => {
    const list = new CircularLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
    expect(list.tail.next).toBe(list.head); // Circular link
  });
});
