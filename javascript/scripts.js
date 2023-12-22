// CREAZIONE SCACCHIERA

const my_chess_container = document.getElementById("chess-container");

const board = [];

for (let i = 0; i < 8; i++) {

    board.push([]);

    for (let j = 0; j < 8; j++) {

        board[i].push(j);
    }

}

console.log(board);

for (let i = 1; i < 9; i++) {

    for (let j = 1; j < 9; j++) {

        const my_box = document.createElement("div");
        my_box.classList.add("square");
        my_box.setAttribute("id", [9 - i, j]);

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

document.getElementById("8,1").innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
document.getElementById("8,8").innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
document.getElementById("1,1").innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
document.getElementById("1,8").innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;

document.getElementById("8,2").innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
document.getElementById("8,7").innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
document.getElementById("1,2").innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
document.getElementById("1,7").innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;

document.getElementById("8,3").innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
document.getElementById("8,6").innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
document.getElementById("1,3").innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
document.getElementById("1,6").innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;

document.getElementById("8,4").innerHTML = `<img class="w-100 h-100" src="./img/red-queen.png" alt=""></img>`;
document.getElementById("8,5").innerHTML = `<img class="w-100 h-100" src="./img/red-king.png" alt=""></img>`;
document.getElementById("1,4").innerHTML = `<img class="w-100 h-100" src="./img/yellow-queen.png" alt=""></img>`;
document.getElementById("1,5").innerHTML = `<img class="w-100 h-100" src="./img/yellow-king.png" alt=""></img>`;

for (let i = 1; i < 9; i++) {
    document.getElementById(`7,${i}`).innerHTML = `<img class="w-100 h-100" src="./img/red-pawn.png" alt=""></img>`;
}

for (let i = 1; i < 9; i++) {
    document.getElementById(`2,${i}`).innerHTML = `<img class="w-100 h-100" src="./img/yellow-pawn.png" alt=""></img>`;
}




