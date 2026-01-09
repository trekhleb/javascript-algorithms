import LinkedList from '../../../../data-structures/linked-list/LinkedList';
import createCycle from '../createCycle';
import detectCycle from '../detectCycle';

describe('Linked List Cycle Tests', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('detectCycle returns false on list with no cycle', () => {
    list
      .append(1)
      .append(9)
      .append(87)
      .append(5)
      .append(22);
    expect(detectCycle(list)).toBe(false);
  });

  test('createCycle creates a cycle and detectCycle detects it', () => {
    list
      .append(1)
      .append(9)
      .append(87)
      .append(5)
      .append(22);
    createCycle(list, 2); // Creates cycle linking tail to node at index 2 (value 87)
    expect(detectCycle(list)).toBe(true);
  });

  test('createCycle with invalid position does not create cycle', () => {
    list
      .append(1)
      .append(9)
      .append(87);
    createCycle(list, 10); // Invalid index, no cycle should be created
    expect(detectCycle(list)).toBe(false);
  });

  test('createCycle with position -1 does not create cycle', () => {
    list
      .append(1)
      .append(9)
      .append(87);
    createCycle(list, -1); // No cycle created
    expect(detectCycle(list)).toBe(false);
  });
});
