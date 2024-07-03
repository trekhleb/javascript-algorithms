import BinaryTreeNode from '../../../../data-structures/tree/BinaryTreeNode';
import breadthFirstSearch from '../breadthFirstSearch';

describe('breadthFirstSearch', () => {
  it('should perform BFS operation on tree', () => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');
    const nodeF = new BinaryTreeNode('F');
    const nodeG = new BinaryTreeNode('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    // In-order traversing.
    expect(nodeA.toString()).toBe('D,B,E,A,F,C,G');

    const enterNodeCallback = jest.fn();
    const leaveNodeCallback = jest.fn();

    // Traverse tree without callbacks first to check default ones.
    breadthFirstSearch(nodeA);

    // Traverse tree with callbacks.
    breadthFirstSearch(nodeA, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback,
    });

    expect(enterNodeCallback).toHaveBeenCalledTimes(7);
    expect(leaveNodeCallback).toHaveBeenCalledTimes(7);

    // Check node entering.
    expect(enterNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(enterNodeCallback.mock.calls[1][0].value).toEqual('B');
    expect(enterNodeCallback.mock.calls[2][0].value).toEqual('C');
    expect(enterNodeCallback.mock.calls[3][0].value).toEqual('D');
    expect(enterNodeCallback.mock.calls[4][0].value).toEqual('E');
    expect(enterNodeCallback.mock.calls[5][0].value).toEqual('F');
    expect(enterNodeCallback.mock.calls[6][0].value).toEqual('G');

    // Check node leaving.
    expect(leaveNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(leaveNodeCallback.mock.calls[1][0].value).toEqual('B');
    expect(leaveNodeCallback.mock.calls[2][0].value).toEqual('C');
    expect(leaveNodeCallback.mock.calls[3][0].value).toEqual('D');
    expect(leaveNodeCallback.mock.calls[4][0].value).toEqual('E');
    expect(leaveNodeCallback.mock.calls[5][0].value).toEqual('F');
    expect(leaveNodeCallback.mock.calls[6][0].value).toEqual('G');
  });

  it('allow users to redefine node visiting logic', () => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');
    const nodeF = new BinaryTreeNode('F');
    const nodeG = new BinaryTreeNode('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    // In-order traversing.
    expect(nodeA.toString()).toBe('D,B,E,A,F,C,G');

    const enterNodeCallback = jest.fn();
    const leaveNodeCallback = jest.fn();

    // Traverse tree without callbacks first to check default ones.
    breadthFirstSearch(nodeA);

    // Traverse tree with callbacks.
    breadthFirstSearch(nodeA, {
      allowTraversal: (node, child) => {
        // Forbid traversing left half of the tree.
        return child.value !== 'B';
      },
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback,
    });

    expect(enterNodeCallback).toHaveBeenCalledTimes(4);
    expect(leaveNodeCallback).toHaveBeenCalledTimes(4);

    // Check node entering.
    expect(enterNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(enterNodeCallback.mock.calls[1][0].value).toEqual('C');
    expect(enterNodeCallback.mock.calls[2][0].value).toEqual('F');
    expect(enterNodeCallback.mock.calls[3][0].value).toEqual('G');

    // Check node leaving.
    expect(leaveNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(leaveNodeCallback.mock.calls[1][0].value).toEqual('C');
    expect(leaveNodeCallback.mock.calls[2][0].value).toEqual('F');
    expect(leaveNodeCallback.mock.calls[3][0].value).toEqual('G');
  });
});
