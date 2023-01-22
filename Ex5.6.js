function aqs(string){
    string =string.split('')
    for(var i=0; i<string.length-4;i++){
    string[i]=   string[i].replace(string[i],'#');
    }
    return string.join('');
}