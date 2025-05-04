function removeDuplicates(input) {
    return [...new Set(input)];
}


arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 8, 10, 10, 7, 4, 3, 5];
console.log(removeDuplicates(arr));


// Poderia utilizar o método filter input.filter(value, index) => input.indexOf(value) === index;