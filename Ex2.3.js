function Da(x) {
    if (Math.sqrt(x) % 1 === 0) {
        return (Math.sqrt(x) + 1) ** 2
    } else {
        return -1;
    }
}