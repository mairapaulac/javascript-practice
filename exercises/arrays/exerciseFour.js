function lastElement(input, n) {
    if (n == null)
        return input[input.length - 1];

    if(n < 0) 
        return null;

    return input.slice(-n);
}


console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2],3));
console.log(lastElement([7, 9, 0, -2],6));