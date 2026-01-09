 function combsort(arr)

{

 function is_array_sorted(arr) {

      var sorted = true;

      for (var i = 0; i < arr.length - 1; i++) {

          if (arr[i] > arr[i + 1]) {

              sorted = false;

              break;

          }

      }

      return sorted;

  }

 

  var iteration_count = 0;

  var gap = arr.length - 2;

  var decrease_factor = 1.25;

 

  // Repeat iterations Until array is not sorted


  

  while (!is_array_sorted(arr)) 

  {

      // If not first gap  Calculate gap

      if (iteration_count > 0)

         gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

 

