function Da(x1, x2, x3, tkrar) {
    debugger;
    if (x1 < 0 || x2 < 0 || x3 < 0) {
        return null;
    }
    else {
        let Awl = x1;
        let ala25r = x2;
        let b3d = x3;
        let msh = b3d
        console.log(Awl);
        console.log(ala25r);
        console.log(b3d);
        for (let i = 0; i < tkrar; i++) {
        msh = b3d;
        b3d = b3d + ala25r + Awl;
        Awl = ala25r;
        ala25r = msh;
        console.log(b3d);
        }
    }
}

Da(0, 0, 1, 10);
Da(1, 1, 1, 10);