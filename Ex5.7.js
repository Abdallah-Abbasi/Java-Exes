
function sWa(aqsd) {
    const x = aqsd.split(" ");
    let s = x[0].length;
    console.log(s);
    for (let i = 0; i < x.length; i++) {
        s = Math.min(s,x[i].length);
    }
    return s
}