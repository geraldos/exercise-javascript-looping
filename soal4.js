let tryAgain = confirm("Apakah anda mau mengulang?");
let counter = 0;

while (tryAgain) {
    let answer = confirm("Apakah anda mau mengulang?")
    counter++;
    if (answer == false) {
        tryAgain = false;
    }
}

document.write("<p>Perulangan sudah dilakuakn sebanyak " + counter + " kali");