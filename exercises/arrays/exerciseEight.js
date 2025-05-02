function mostFrequent(input) {
   var countMostFrequent = 0;
   var char;
   var finalCount = 0;

   pal = input.toString();

   for (let i = 0; i < pal.length; i++) {
        char = pal[i];
        countMostFrequent = 0;
        for(let j = 0; j < pal.length; j++) {
            if (pal[j] === char) {
                countMostFrequent++;
            }
        }

        if (finalCount < countMostFrequent) 
            finalCount = countMostFrequent;
   }

   return finalCount;
}

console.log(mostFrequent("maira"));