import BinarySearchTreeNode from '../../../../data-structures/tree/binary-search-tree/BinarySearchTreeNode';
import postorderTraversal from '../postorderTraversal';

describe('Postorder Traversal of Binary tree', () => {
  it('sholud give postorder travsersal of binary tree', () => {
    // creating BST
    const bst = new BinarySearchTreeNode(10);

    // inserting values to BST
    bst.insert(25);
    bst.insert(-5);
    bst.insert(11);
    bst.insert(9);
    bst.insert(8);
    bst.insert(15);

    // callback function
    const callback = jest.fn();
    postorderTraversal(bst, callback);

    // checking number of times function called
    expect(callback).toHaveBeenCalledTimes(7);

    // checking values
    expect(callback.mock.calls[0][0].value).toEqual(8);
    expect(callback.mock.calls[1][0].value).toEqual(9);
    expect(callback.mock.calls[2][0].value).toEqual(-5);
    expect(callback.mock.calls[3][0].value).toEqual(15);
    expect(callback.mock.calls[4][0].value).toEqual(11);
    expect(callback.mock.calls[5][0].value).toEqual(25);
    expect(callback.mock.calls[6][0].value).toEqual(10);
  });
});
