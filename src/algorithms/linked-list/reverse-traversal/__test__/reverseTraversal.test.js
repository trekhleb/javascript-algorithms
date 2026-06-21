import LinkedList from '../../../../data-structures/linked-list/LinkedList';
import reverseTraversal from '../reverseTraversal';

describe('reverseTraversal', () => {
  it('should traverse linked list in reverse order', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(1)
      .append(2)
      .append(3);

    const traversedNodeValues = [];
    const traversalCallback = (nodeValue) => {
      traversedNodeValues.push(nodeValue);
    };

    reverseTraversal(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([3, 2, 1]);
  });

  // New Test: Should throw an error if no callback is provided
  it('should throw an error if no callback function is provided', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);

    expect(() => reverseTraversal(linkedList)).toThrow('Callback function is required for reverseTraversal');
  });

  //  New Test: Should throw an error if the linked list is empty
  it('should throw an error if linked list is empty', () => {
    const linkedList = new LinkedList();

    expect(() => reverseTraversal(linkedList, (value) => console.log(value))).toThrow(
      'Cannot reverse traverse an empty linked list',
    );
  });

  //  New Test: Should throw an error if linked list is null
  it('should throw an error if linked list is null', () => {
    expect(() => reverseTraversal(null, (value) => console.log(value))).toThrow(
      'Cannot reverse traverse an empty linked list',
    );
  });
});
