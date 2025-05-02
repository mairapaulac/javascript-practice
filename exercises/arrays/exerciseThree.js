function firstElement(input, n) {

    if (n === null)
        return input[0];

    if(n < 0) 
        return [];

    return input.slice(0, n);
    
}


console.log(firstElement([1,2,3]));