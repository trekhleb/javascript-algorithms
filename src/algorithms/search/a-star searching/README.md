This is the actual implementation of the algorithm. I will do my best to explain what is going on, but feel free to just look at the source of the example, or just download astar.js.

There are three functions that we keep track of for nodes that we look at:

g(x): The total cost of getting to that node (pretty straightforward). If we reach a node for the first time or reach a node in less time than it currently took, then update the g(x) to the cost to reach this node.
h(x): The estimated time to reach the finish from the current node. This is also called a heuristic. We online need to update this if it is not set already, since the distance to the finish will not change even if the path we took to arrive at a node changes. Note: There are many different ways to guess how far you are from the end, I use the Manhattan distance in this implementation.
f(x): Simply g(x) + h(x). The lower the f(x), the better. Think about it like this: the best node is one that takes the least total amount of time to arrive at and to get to the end. So, a node that took only 1 step to arrive at and 5 to get to the end is more ideal than one that took 10 to arrive and and only 1 to get to the end.





PsuedoCode:
push startNode onto openList
while(openList is not empty) {
 currentNode = find lowest f in openList
 if currentNode is final, return the successful path
 push currentNode onto closedList and remove from openList
 foreach neighbor of currentNode {
     if neighbor is not in openList {
            save g, h, and f then save the current parent
            add neighbor to openList
     }
     if neighbor is in openList but the current g is better than previous g {
             save g and f, then save the current parent
     }
 }