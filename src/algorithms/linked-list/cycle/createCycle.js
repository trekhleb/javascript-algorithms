export default function createCycle(linkedList, position) {
  if (!linkedList.head || position < 0) return;

  let cycleNode = null;
  let tail = linkedList.head;
  let index = 0;

  while (tail.next) {
    if (index === position) {
      cycleNode = tail;
    }
    tail = tail.next;
    index += 1;
  }

  // For the last node
  if (index === position) {
    cycleNode = tail;
  }

  if (cycleNode) {
    tail.next = cycleNode;
  }
}
