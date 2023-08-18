function combine(first:number | string, second:number | string){
    if(typeof first ==='string' && typeof second === 'string'){
        return String(first) + String(second)
    }else if(typeof first === 'number' && typeof second === 'number'){
        return first + second
    }
}

combine(10, 20);


function add<T>(first:T, second:T){
    if(typeof first ==='string' && typeof second === 'string'){
        return String(first) + String(second)
    }else if(typeof first === 'number' && typeof second === 'number'){
        return first + second
    }
}

add(10, 20);
add('Baban','Dakale')

export {}