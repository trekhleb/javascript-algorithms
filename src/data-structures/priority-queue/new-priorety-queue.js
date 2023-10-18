
export default class PriorityQueue {
    constructor() {
      this.arr=[];
    }
    isEmpty(){
        return this.arr.length===0;
    }
    peek(){
      return  this.isEmpty() ? null : this.arr[this.arr.length - 1][0];
    }
    add(item , priority = 0){
          if(this.isEmpty()){
             return this.arr =[[item,priority]];
          }
          for( let i = 0; i < this.arr.length; i++ ){
              if(this.arr[i][1] <= priority ){
                  this.arr.splice(i,0,[item,priority]);
                  return this.arr;
              }
          }
          return this.arr.push([item,priority]);
    }
  
    poll(){
        if(this.isEmpty()){
            return null;
        }
        return this.arr.pop()[0];
    }

    changePriority(item, priority = 0) {
        if(this.isEmpty()) {
          return null;
        }
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i][0] === item) {
            this.arr.splice(i, 1);
            this.add(item, priority);
            return this.arr;
          }
        }
        return null;
      }
    
      hasValue(item) {
        if(this.isEmpty()) {
          return false;
        }
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i][0] === item) {
            return true;
          }
        }
        return false;
      }
  }
  

  