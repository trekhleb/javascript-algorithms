/**
 * @param {object} linkedList - The linked list to check
 * @returns {boolean}
 */
export default function hasCycle(linkedList) {
  let head = linkedList.head;
  
  // Check if head and head.next exist
  if (!head || !head.next) {
    return false;
  }
  
  let tortoise = head;
  let hare = head.next;
  
  while (hare && hare.next) {
    // Check if tortoise and hare are equal to each other
    if (tortoise === hare) {
      return true;
    }
    
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  
  return false; // No cycle was found
}
