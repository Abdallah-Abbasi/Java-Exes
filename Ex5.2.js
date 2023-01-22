function aq(mrat, string){
    let newString='';
    for (let i = 1; i <= mrat; i++) {
        newString+=string;
    }

    return newString;
}

console.log(aq(5,"Aa"));