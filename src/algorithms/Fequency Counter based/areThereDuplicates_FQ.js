
//Program to check if duplicate elements are present inside an array.

function areThereDuplicatesFQ(){
    let obj = {};

    for(let val in arguments){
        obj[arguments[val]] = (obj[arguments[val]]||0)+1;
    }

    for(let key in obj){
        if(obj[key]>1) return true;
    }
    return false;
}

areThereDuplicatesFQ(1,2,5,7,8);
