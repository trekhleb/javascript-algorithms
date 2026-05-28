import LinkedList from "../../../../data-structures/linked-list/LinkedList";
import LinkedListNode from "../../../../data-structures/linked-list/LinkedListNode";
import hareAndTortoise from "../hareTortoise";

function getTail(linkedList){
    let tail = linkedList.head;
    while(tail.next){
        tail=tail.next;
    }
    return tail;
}
describe('cycleDetection',()=>{
    it('should be able to properly detect no cycles in a linked list',()=>{
        let simpleLinkedList = new LinkedList();
        simpleLinkedList
            .append(1)
            .append(2)
            .append(3);
        
        const containsCycle = hareAndTortoise(simpleLinkedList);
        expect(containsCycle).toEqual(false);
    });
    it('should detect a cycle in the linked list',()=>{
        let cyclicLinkedList = new LinkedList();
        cyclicLinkedList
            .append(1)
            .append(2)
            .append(3)
            .append(4);
        const tail = getTail(cyclicLinkedList);
        tail.next = cyclicLinkedList.head;
        const containsCycle = hareAndTortoise(cyclicLinkedList);
        expect(containsCycle).toEqual(true);
    });

})
