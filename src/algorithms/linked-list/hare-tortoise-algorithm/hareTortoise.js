/**
 * @param {LinkedList} linkedList
 * @returns {boolean}
 */

export default function hareAndTortoise(linkedList){
    let hare = linkedList.head;
    let tortoise = linkedList.head;
    while(hare && hare.next && hare.next.next){
        hare = hare.next.next;
        tortoise = tortoise.next;
        //iterate till "hare" has not reached the end of list
        if(hare == tortoise){
            // we got a cycle
            return true;
        }
        
    }
    // no cycle just the end of list
    return false;
}