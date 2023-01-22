function sasz(z) {
    const x = z.split(" ");
    let mW = x[0];
    for (let i = 0; i < x.length; i++) {
        if(x[i].length > mW.length)
        {
            mW = x[i];
        }
    }
    return mW;
}