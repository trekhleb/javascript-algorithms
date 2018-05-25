function linearSearch(array, Find){
  for(let i = 0; i < array.length; i++){
    if(array[i] === Find) return i;
    
  }
   return -1;
}
