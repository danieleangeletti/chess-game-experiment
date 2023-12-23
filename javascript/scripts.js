// CREAZIONE SCACCHIERA

const my_chess_container = document.getElementById("chess-container");

const board = [];

for (let i = 0; i < 8; i++) {

    board.push([]);

    for (let j = 0; j < 8; j++) {

        board[i].push({
            x: i,
            y: j,
            piece: "",
            player: -1,
        });
    }

}

console.log(board);

for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[i].length; j++) {

        const my_box = document.createElement("div");
        my_box.classList.add("square");
        my_box.setAttribute("id", [7 - i, j]);

        if ((i + j) % 2 != 0) {
            my_box.classList.add("bg-dark");
        }
        
        else {
            my_box.classList.add("bg-white");
        }

        my_chess_container.append(my_box);

    }

}

// AGGIUNTA PEZZI

document.getElementById("7,0").innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
board[7][0].piece = "rook";
board[7][0].player = 1;

document.getElementById("7,7").innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
board[7][7].piece = "rook";
board[7][7].player = 1;

document.getElementById("0,0").innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
board[0][0].piece = "rook";
board[0][0].player = 0;

document.getElementById("0,7").innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
board[0][7].piece = "rook";
board[0][7].player = 0;

document.getElementById("7,1").innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
board[7][1].piece = "knight";
board[7][1].player = 1;

document.getElementById("7,6").innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
board[7][6].piece = "knight";
board[7][6].player = 1;

document.getElementById("0,1").innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
board[0][1].piece = "knight";
board[0][1].player = 0;

document.getElementById("0,6").innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
board[0][6].piece = "knight";
board[0][6].player = 0;

document.getElementById("7,2").innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
board[7][2].piece = "bishop";
board[7][2].player = 1;

document.getElementById("7,5").innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
board[7][5].piece = "bishop";
board[7][5].player = 1;

document.getElementById("0,2").innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
board[0][2].piece = "bishop";
board[0][2].player = 0;

document.getElementById("0,5").innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
board[0][5].piece = "bishop";
board[0][5].player = 0;

document.getElementById("7,3").innerHTML = `<img class="w-100 h-100" src="./img/red-queen.png" alt=""></img>`;
board[7][3].piece = "queen";
board[7][3].player = 1;

document.getElementById("7,4").innerHTML = `<img class="w-100 h-100" src="./img/red-king.png" alt=""></img>`;
board[7][4].piece = "king";
board[7][4].player = 1;

document.getElementById("0,3").innerHTML = `<img class="w-100 h-100" src="./img/yellow-queen.png" alt=""></img>`;
board[0][3].piece = "queen";
board[0][3].player = 0;

document.getElementById("0,4").innerHTML = `<img class="w-100 h-100" src="./img/yellow-king.png" alt=""></img>`;
board[0][4].piece = "king";
board[0][4].player = 0;

for (let i = 0; i < board[0].length; i++) {
    document.getElementById(`6,${i}`).innerHTML = `<img class="w-100 h-100" src="./img/red-pawn.png" alt=""></img>`;
    board[6][i].piece = "pawn";
    board[6][i].player = 1;
}

for (let i = 0; i < board[0].length; i++) {
    document.getElementById(`1,${i}`).innerHTML = `<img class="w-100 h-100" src="./img/yellow-pawn.png" alt=""></img>`;
    board[1][i].piece = "pawn";
    board[1][i].player = 0;
}

// GESTIONE CLICK

let active = false;
let clicked_box = null;
let active_box = null;
let turn = 0;

for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[i].length; j++) {

        const my_box = document.getElementById(`${i},${j}`);

        my_box.addEventListener("click", function() {

            clicked_box = board[i][j];

            if ((active == false) && (clicked_box.player == 0) && (turn == 0)) {
                active_box = board[i][j];
                active = true;
                console.log("Attivando: ", active_box);
            }

            else {

                if ((active == true) && is_empty(clicked_box)) {
                    console.log("Disattivando: ", active_box);
                    active = false;
                    active_box = null;
                }
            }
        })

    }

}

// FUNCTIONS

// function is_empty(x, y) {
//     return board[x][y].piece == "";
// }

function is_empty(box) {
    return box.piece == "";
}
