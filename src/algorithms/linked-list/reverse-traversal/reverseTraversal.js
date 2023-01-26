// head = [1 2 3 4 5]  output = [5 4 3 2 1]
// head = [1 2]  output = [2 1]
// head = []  output = []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  prevHead = null;
      while(head!=null){
           nextRec = head.next;
          head.next = prevHead;
          prevHead = head;
          head = nextRec;
          //Reversing the connection b/w nodes
      }
      return prevHead;
};