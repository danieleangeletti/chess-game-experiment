const my_chess_container = document.getElementById("chess-container");

const board = [];

for (let i = 0; i < 8; i++) {

    board.push([]);

    for (let j = 0; j < 8; j++) {

        board[i].push(j);
    }

}

console.log(board);

for (let i = 0; i < 8; i++) {

    for (let j = 0; j < 8; j++) {

        const my_box = document.createElement("div");
        my_box.classList.add("square");

        if ((i + j) % 2 != 0) {
            my_box.classList.add("bg-dark");
        }
        
        else {
            my_box.classList.add("bg-white");
        }

        my_chess_container.append(my_box);

        }

}

const my_box = document.querySelectorAll(".square");

my_box[0].innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
my_box[7].innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
my_box[56].innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
my_box[63].innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;

my_box[1].innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
my_box[6].innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
my_box[57].innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
my_box[62].innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;

my_box[2].innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
my_box[5].innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
my_box[58].innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
my_box[61].innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;

my_box[3].innerHTML = `<img class="w-100 h-100" src="./img/red-queen.png" alt=""></img>`;
my_box[4].innerHTML = `<img class="w-100 h-100" src="./img/red-king.png" alt=""></img>`;
my_box[59].innerHTML = `<img class="w-100 h-100" src="./img/yellow-queen.png" alt=""></img>`;
my_box[60].innerHTML = `<img class="w-100 h-100" src="./img/yellow-king.png" alt=""></img>`;

for (let i = 8; i < 16; i++) {
    my_box[i].innerHTML = `<img class="w-100 h-100" src="./img/red-pawn.png" alt=""></img>`;
}

for (let i = 48; i < 56; i++) {
    my_box[i].innerHTML = `<img class="w-100 h-100" src="./img/yellow-pawn.png" alt=""></img>`;
}


