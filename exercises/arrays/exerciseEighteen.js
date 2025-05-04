function binarySearch(input, keyVal) {
    input.sort((a, b) => a - b)

    let left = 0;
    let right = input.length - 1;
    let mid;

    // precisamos encontrar o meio do array

    while (right >= left) {

        mid = left + Math.floor((right - left) / 2);

        // o elemento pode já estar no meio
        if (input[mid] == keyVal) 
            return mid;

        // se o elemento for menor que keyValue, só pode estar na parte esquerda do array
        if (input[mid] > keyVal) 
            high = mid - 1;

        // se o elemento for maior que keyValue, só pode estar na parte direita
        if (input[mid] <  keyVal)
            low = mid + 1;
    }

    // retorna -1 se o elemento não estiver presente.
    return -1;
}





// O array deve estar ordenado