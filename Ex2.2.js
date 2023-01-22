function Lol(x) {

    let y;
    let result = 0;
    for (y = 0; y < x.length; y++) {
        result += Math.pow(2, y) * x[x.length - 1 - y];
    }
    return result;
}
console.log(Lol([1, 1, 1, 1]));