my_chess_container = document.getElementById("chess-container");

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


