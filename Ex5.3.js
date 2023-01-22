function qwerty(string){
    let i;
    let NewString="";
    let hla2='';
    let mshhla2='';
    for(i=0; i<string.length;i++ ){
        hla2=string[i];

        if(string[i]==="-" || string[i]==="_"){
            mshhla2=string.slice(i,i+2).toUpperCase().replace("-",'').replace("_",'');
            hla2=mshhla2;
            i++;
        }
        else 
        mshhla2='';
        NewString+=hla2;
    }
    return NewString;
}
console.log(qwerty("the-stealth_warrior"));