//--------------------Intersection of sets-------------------//

/**
 *
 * @param {Set} setA - This is the first set
 * @param {Set} setB - This  is the second set
 * @description:
 *  The function is expected to run loop on one set to find if there exist
 * any common in both of them \
 * 1]We loop through the set \
 * 2]If any common is found we add it to our intersect set \
 * 3]We show it to user
 * @return {Set} returns a set containing the intersect of the two sets
 *@example 
 const result= Intersect(new Set([1,2,3,4]),new Set([4,5,6,7]));
 console.log(result);
 */
export const Intersect = (setA, setB) => {
  const intersect = new Set(); //set declaration
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersect.add(elem); //add element to the intersect set
    }
  }
  return intersect;
}; //javascript function definition
