function sumOfSquares(input) {
    var sum = 0;

    input.forEach((element) => {
        sum+= Math.pow(element, 2);
    });

    return sum;
}