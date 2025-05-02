function cloneArr(input) {

    const newArr = [];

    for (let i = 0; i < input.length; i++) {
        newArr.push(input[i]);
    }

    return newArr;
}


console.log(cloneArr([1, 4, 5, 6, 7, 8, 9]));