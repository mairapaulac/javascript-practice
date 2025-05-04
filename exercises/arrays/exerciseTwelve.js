function sumAndProduct(input) {
    var sum = 0;
    var product = 1;

    input.forEach((element) => {
        sum += element;
        product *= element;
    });

    return { sum, product };
}

console.log(sumAndProduct([1, 2, 3, 4, 5, 6]));
