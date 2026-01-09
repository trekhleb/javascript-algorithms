//This function is calculate the manhattan distance
/** 
* @param {string} x
* @param {string} y
* @return {string}
*/
export default function manhattanDistance(x, y){

let SumOfManhattanDistance = 0;

for (let i = 0; i < x.length; i++){
	for (let j = 0; j < x[i].length ; j++){
	//Compute the result of the Manhattan Distance
	SumOfManhattanDistance += (Math.abs(x[i] -x[j])+Math.abs(y[i] - y[j]));
	}
}
//Send the result back to the main function
return SumOfManhattanDistance; 
}