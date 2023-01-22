function Time(x) {
    if (x % 100 == 0) {
        return x / 100;
    }
    return Number.parseInt((x / 100) + 1);
}