function aquw(str) {
    return str
        .split(" ")
        .map(word => Array.from(word)
            .map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase())
            .join("")
        )
        .join(" ");
}
