import Comparator from '../../../utils/comparator/Comparator';

/**
 * Give an array of integers numbers, the task is rotate the array elements to the left 
 * according to the number of positions provided
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number[]}
*/
export default function arrayRotation(arr,d,comparatorCallback){
    const comparator = new Comparator(comparatorCallback);
    if(d>arr.length-1) return false;
    let p = 1;
    
    while(p<=d){
        let first = arr[0];
        
        for(let i=0;i<=arr.length-1;i++){
            if(comparator.equal(i,arr.length-1)) arr[i] = first
            else arr[i] = arr[i+1];
        }
        p = p+1;
    }
    return arr;
}