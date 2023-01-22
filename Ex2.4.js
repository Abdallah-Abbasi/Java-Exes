function La(x){
    const count = {};
    x.forEach((element) => {
        count[element] = (count[element] || 0) + 1;
    });
    for (const key in count) {
        if (count[key] === 1) {
            return key;
        }
    }
return;
}