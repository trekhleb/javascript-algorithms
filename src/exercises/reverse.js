
// this will reverse a string array using recursion

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


function reverseString(s){
  
  let o = [];
  function reverse(s, index){
  
    if ( index -1 >= 0 ){
      o.push(s[index-1]);
      index--;
      return reverse(s, index);
    }
    else{
      return o;
    }
  }

  if (s && s.length > 0){
    s = reverse(s, s.length);
    console.log (s);
  }
}

function reverseArray (toBeReversed){
  var reversed = [];

  function reverser (toBeReversed){
    if (toBeReversed.length !== 0){
      reversed.push( toBeReversed.pop() );
      reverser( toBeReversed );
    }
  }

  reverser(toBeReversed);
  return reversed;
}
// reverseString(["h","e","l","l","o"]);
let arr = reverseArray(["h","e","l","l","o"]);
console.log (arr);

