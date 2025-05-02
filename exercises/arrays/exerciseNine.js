function swapCase(input) {

    let pal = input.toString();
    let res = "";

    for(let i = 0; i < pal.length; i++) {
        if(pal[i] === pal[i].toUpperCase()) {
            res+= pal[i].toLowerCase();
        } else {
            res += pal[i].toUpperCase();
        }
    }

    return res;
}

console.log(swapCase("GiOvAnNa"));

// Em javascript strings são imutáveis.