import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with kay and value', () => {
    const node = new LinkedListNode({ value: 1, key: 'test' });
    expect(node.value).toBe(1);
    expect(node.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('should convert node to string', () => {
    const node = new LinkedListNode({ value: 1 });
    const nodeWithKey = new LinkedListNode({ value: 1, key: 'test' });

    expect(node.toString()).toBe('1');
    expect(nodeWithKey.toString()).toBe('test:1');
  });
});
