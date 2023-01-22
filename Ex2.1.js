function sumOfLowestNumbers(array) {
    let x = [];
    
        for (let y = 0; y < array.length; y++) {
    if (typeof array[y] === 'number' && array[y] >= 0 && Number.isInteger(array[y])) {
        x.push(array[y]);
    }
    }
    const sortedarray= x.sort((a, b) => a - b);
    console.log(`the tow lowest numbers ${sortedarray[0]} and ${sortedarray[1]}`);
    return sortedarray[0] + sortedarray[1];
}
console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
