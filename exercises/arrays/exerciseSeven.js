function compare(a, b) {
    return a - b; // se a = 4, b = 3 --> b, a (3, 4); se a = 2, b = 5, --> (a, b)
}

function sortElement(input) {
    return input.sort(compare);
}

numArr = [1,5,6,3,7,8,67,32,321,13];

console.log(sortElement(numArr));