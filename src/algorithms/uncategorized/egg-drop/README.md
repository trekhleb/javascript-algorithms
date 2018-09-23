#

The egg dropping problem is a famous one in computer science.  
There is a building with n floors and we have a certain number of
eggs, say m eggs.  We essentially want to start dropping the eggs
from some floor to see if the egg breaks or not and we want to find
the minimum number of drops required to figure out at which random
floor the eggs start breaking.  

So let's pick a floor randomly to drop eggs from.  If we pick the
lowest one and go up.  Then the number of drops will be equal to
the number of floors in the worst case.  Same thing goes if we start
at the very top and starting coming donw floor by floor.

So starting at the beginning or the end doesn't seem like a good idea.

At every drop, there are two different states.  If the egg breaks, 
that's one state, if it doesn't break, that's a different state.
 
Say we have 2 eggs and 3 floors.  If we drop from second floor:

									2nd fl
		egg breaks	/								\  doesn't break
				1st fl 								3rd fl
	egg breaks	/	\ doesn't break 	 egg breaks /	\ doesn't break

We repeat this process, for every node(floor) of the tree, which will
give us over lapping subproblems, which makes this problem a good one 
to use the dynamic programming technique.

At every floor we want to calculate the maximum number of drops to
the left subtree and the rightsubtree.

Starting from second floor(1st drop):
1: the egg breaks, we go down to the first floor(1st drop from first floor):
	1: the egg breaks, no more floors or eggs
	2: the egg doesn't break, no more floors
	either way total drop count is 1
2: the egg doesn't break, we go up to the third floor(1st drop from third floor):
	1: the egg breaks, no more floors or eggs
	2: the egg doesn't break, no more floors
	either way total drop count is 1 

We take the max drop counts of each subtree until there are no more floors
or eggs.