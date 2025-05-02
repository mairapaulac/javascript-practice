function printNestedArrays(input) {
    let col = 0;
    for(let i = 0; i < input.length; i++){
        console.log(`row ${col}`);
        col++;
        for(let j = 0; j < input[i].length; j++) {
            console.log(input[i][j]);
        }
    }
}

printNestedArrays([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);