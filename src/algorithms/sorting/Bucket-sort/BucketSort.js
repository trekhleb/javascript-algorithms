import Sort from '../Sort';

export default class BucketSort extends Sort {
    sort(originalArray) {
        let array = [];
        let bucketSize = originalArray.length;

        let minValue = originalArray[0];
        let maxValue = originalArray[0];
        originalArray.forEach(function (currentVal) { //get Min and Max number in array
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })

        let buckets = new Array(bucketSize);

        for (var i = 0; i < buckets.length; i++) { //make 2d array for storing numbers in different buckets
            buckets[i] = new Array(bucketSize);
        }
        
        originalArray.forEach(element => { //for each item in array sort them into their respected bucket
            let index = Math.floor(element - minValue); // get index by getting the number - min value in array.
            buckets[index].push(element); //pushes element into bucket of index we found
        });

        buckets.forEach(element => { // Concat all buckets into one array
            element.forEach(number => {
                if (typeof number !== 'undefined') {              
                    array.push(number);
                }                  
            });
        });

        return array
    }
}