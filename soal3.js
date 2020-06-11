for (var x = 1; x <= 20; x++) {
    if (x === 0) {
        document.write("<p>Angka Genap " + x);
    } else if (x % 2 === 1) {
        document.write("<p>Agnka Genap " + x);
    } else {
        document.write("<p>Angka Ganjil " + x);
    }
}