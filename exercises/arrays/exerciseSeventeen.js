function shuffleArr(input) {
    let shuffledArr = [];

    for (let i = 0; i < input.length; i++) {
        let randomIndex = Math.floor(Math.random() * input.length);

        //roda até achar um índice vazio
        while (shuffledArr[randomIndex] !== undefined) {
            randomIndex = Math.floor(Math.random() * input.length);
        }

        shuffledArr[randomIndex] = input[i];
    }

    return shuffledArr;
}

console.log(shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// O mais correto seria utilizar o algoritmo de Fisher-Yates.