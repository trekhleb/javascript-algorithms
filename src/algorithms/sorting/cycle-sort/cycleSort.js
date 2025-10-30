<script>
// A javascript program to implement cycle sort algorith
 
    // Function sort the array using Cycle sort algorithm
    function cycleSort(arr, n)
    {
     
        // count the number of memory writes
        let writes = 0;
   
        // traverse the array elements and put it to on
        // the right position
        for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++)
        {
         
            // initialize an item as starting point
            let item = arr[cycle_start];
   
            // Find a position where we put the item. So basically we
            // count all the smaller elements on the right side of the item.
            let pos = cycle_start;
            for (let i = cycle_start + 1; i < n; i++)
                if (arr[i] < item)
                    pos++;
   
            // If the item is already in correct position then
            if (pos == cycle_start)
                continue;
   
            // ignore all the duplicate elements
            while (item == arr[pos])
                pos += 1;
   
            // keeo the item to it's right position
            if (pos != cycle_start)
            {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;
                writes++;
            }
   
            // Rotate the rest of the cycle
            while (pos != cycle_start)
            {
                pos = cycle_start;
   
                // Find a position where we could put the element
                for (let i = cycle_start + 1; i < n; i++)
                    if (arr[i] < item)
                        pos += 1;
   
                // ignore all the duplicate elements
                while (item == arr[pos])
                    pos += 1;
   
                // keep the item to it's right position
                if (item != arr[pos]) {
                    let temp = item;
                    item = arr[pos];
                    arr[pos] = temp;
                    writes++;
                }
            }
        }
    }
      
// Driver code starts here
 
    let arr = [ 1, 8, 3, 9, 10, 10, 2, 4 ];
       let n = arr.length;
       cycleSort(arr, n);
  
      document.write("After sort : " + "<br/>");
       for (let i = 0; i < n; i++)
           document.write(arr[i] + " ");
   
</script>
