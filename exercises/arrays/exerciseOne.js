function isArr(input) {
    if (Array.isArray(input)) {
        return true
    }
    else {
        return false
    }
}

console.log(isArr([1, 2, 3, 4, 5, 6, 7, 8]));