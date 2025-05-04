function findLeapYears(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 4 == 0)
            console.log(i);
    }
}

findLeapYears(2000, 2025);