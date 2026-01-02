// TO CHECK IF TWO STRINGS ARE ANAGRAM OR NOT

function anagram(word1, word2) {
  let sorted1 = word1.split('').sort().join(''); //SORTING WORD1
  let sorted2 = word2.split('').sort().join(''); //SORTING WORD2

  //COMPARING LENGTH AND CHECKING === 
  if (sorted1.length === sorted2.length && sorted1 === sorted2) {
        return true;
  }
  else{
        return false;
  }
}

if(anagram('binary', 'brainy')){
  alert('AN ANAGRAM');  
}
else{
  alert('NOT AN ANAGRAM');
}
