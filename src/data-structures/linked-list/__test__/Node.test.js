import Node from '../Node';

describe('Node', () => {
  it('should create list node with value', () => {
    const node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
});
