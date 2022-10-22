let size = 8;
let board = "";
for (let width = 0; width < size; width++) {
    for (let length = 0; length < size; length++) {
        if ((length + width) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board)