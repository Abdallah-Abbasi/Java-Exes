let x = function (b) {
    return Array(b).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
    }
    x(4);