function la(b,o) {
    let x = 0; 
    let z = o;
    let y = ""
    for (let i = 0; i < b; i++) {
    y+=z+" "
    const temp=x
    x=z
    z+=temp
    
    if(i==0)
    z=1
    }
    return y
}