// CREAZIONE SCACCHIERA

const my_chess_container = document.getElementById("chess-container");

const board = [];

for (let i = 0; i < 8; i++) {
  board.push([]);

  for (let j = 0; j < 8; j++) {
    // CREAZIONE OGGETTO PER OGNI CASELLA
    board[i].push({
      // COORDINATE X Y
      x: i,
      y: j,
      // PEZZO CORRISPONDENTE ALLA CASELLA
      piece: "",
      // PLAYER: -1 = CASELLA VUOTA; PLAYER: 0 = CASELLA CON PEZZO UTENTE; PLAYER: 1 = CASELLA CON PEZZO AVVERSARIO
      player: -1,
    });
  }
}

console.log(board);

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    const my_box = document.createElement("div");
    my_box.classList.add("square");
    my_box.setAttribute("id", [j, i]);

    if ((i + j) % 2 != 0) {
      my_box.classList.add("bg-dark");
    } else {
      my_box.classList.add("bg-white");
    }

    my_chess_container.append(my_box);
  }
}

// AGGIUNTA PEZZI

document.getElementById(
  "0,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
board[0][0].piece = "rook";
board[0][0].player = 1;

document.getElementById(
  "7,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
board[7][0].piece = "rook";
board[7][0].player = 1;

document.getElementById(
  "0,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
board[0][7].piece = "rook";
board[0][7].player = 0;

document.getElementById(
  "7,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
board[7][7].piece = "rook";
board[7][7].player = 0;

document.getElementById(
  "1,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
board[1][0].piece = "knight";
board[1][0].player = 1;

document.getElementById(
  "6,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
board[6][0].piece = "knight";
board[6][0].player = 1;

document.getElementById(
  "1,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
board[1][7].piece = "knight";
board[1][7].player = 0;

document.getElementById(
  "6,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
board[6][7].piece = "knight";
board[6][7].player = 0;

document.getElementById(
  "2,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
board[2][0].piece = "bishop";
board[2][0].player = 1;

document.getElementById(
  "5,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
board[5][0].piece = "bishop";
board[5][0].player = 1;

document.getElementById(
  "2,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
board[2][7].piece = "bishop";
board[2][7].player = 0;

document.getElementById(
  "5,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
board[5][7].piece = "bishop";
board[5][7].player = 0;

document.getElementById(
  "3,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-queen.png" alt=""></img>`;
board[3][0].piece = "queen";
board[3][0].player = 1;

document.getElementById(
  "4,0"
).innerHTML = `<img class="w-100 h-100" src="./img/red-king.png" alt=""></img>`;
board[4][0].piece = "king";
board[4][0].player = 1;

document.getElementById(
  "3,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-queen.png" alt=""></img>`;
board[3][7].piece = "queen";
board[3][7].player = 0;

document.getElementById(
  "4,7"
).innerHTML = `<img class="w-100 h-100" src="./img/yellow-king.png" alt=""></img>`;
board[4][7].piece = "king";
board[4][7].player = 0;

for (let i = 0; i < board[0].length; i++) {
  document.getElementById(
    `${i},1`
  ).innerHTML = `<img class="w-100 h-100" src="./img/red-pawn.png" alt=""></img>`;
  board[i][1].piece = "pawn";
  board[i][1].player = 1;
}

for (let i = 0; i < board[0].length; i++) {
  document.getElementById(
    `${i},6`
  ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-pawn.png" alt=""></img>`;
  board[i][6].piece = "pawn";
  board[i][6].player = 0;
}

// GESTIONE CLICK
let active = false;
let clicked_box = null;
let active_box = null;
let turn = 0;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    const my_box = document.getElementById(`${j},${i}`);

    my_box.addEventListener("click", function () {
      clicked_box = board[j][i];

      if (active == false && clicked_box.player == 0 && turn == 0) {
        active_box = board[j][i];
        active = true;
        console.log("Attivando: ", active_box);
      } else {
        if (active == true && is_empty(clicked_box)) {
          const valid = move(active_box, clicked_box);

          if (valid === true) {
            // MUOVI L'IMMAGINE
            const activeBoxHtml = document.getElementById(
              `${active_box.x},${active_box.y}`
            );
            const clickedBoxHtml = document.getElementById(
              `${clicked_box.x},${clicked_box.y}`
            );

            clickedBoxHtml.innerHTML = activeBoxHtml.innerHTML;
            activeBoxHtml.innerHTML = "";

            console.log("Disattivando: ", clicked_box);
            active = false;
            active_box = null;
          } else {
            alert("invalid move");
          }
        }
      }
    });
  }
}

// FUNCTIONS

function is_empty(box) {
  return box.piece == "";
}

function move(box, destination) {
  // MUOVE LA CASELLA 'BOX' VERSO LA CASELLA 'DESTINATION'.
  switch (box.piece) {
    case "pawn":
      // MOVE PAWN
      if (destination.x == box.x && destination.y == box.y - 1) {
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      } else {
        return false;
      }

    case "rook":
      // MOVE ROOK
      // if (destination.x == box.x || destination.y == box.y) {
      //   board[destination.x][destination.y] = {
      //     x: destination.x,
      //     y: destination.y,
      //     piece: box.piece,
      //     player: box.player,
      //   };

      //   board[box.x][box.y] = {
      //     x: box.x,
      //     y: box.y,
      //     piece: "",
      //     player: -1,
      //   };

      //   return true;
      // } else {
      //   return false;
      // }
      // break;

      // ---------- REGOLE PER IMPEDIRE ALLA TORRE DI SCAVALCARE UN PEZZO MIO INIZIO ----------

      // - Capire se il pezzo sta andando in basso, in alto, a sinistra, o destra.
      // - Con un ciclo for, scorri la direzione trovata al passo precedente, partendo da 'box' fino a 'destination'.
      // - In ogni iterazione del for, chiama is_empty(). Se ritorna false, esci dal ciclo e la mossa è invalida.
      // - Se tutte le chiamate a is_empty ritornano true, la mossa è valida.

      // LEFT
      if (destination.x > box.x && destination.y == box.y) {
      }
      // UP
      if (destination.x == box.x && destination.y < box.y) {
        for (let i = box.y - 1; i >= destination.y; i--) {
          if (!is_empty(board[box.x][i])) {
            return false;
          }
        }
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      }
      // RIGHT
      if (destination.x < box.x && destination.y == box.y) {
      }
      // DOWN
      if (destination.x == box.x && destination.y > box.y) {
        for (let i = box.y + 1; i <= destination.y; i++) {
          if (!is_empty(board[box.x][i])) {
            return false;
          }
        }
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      }

    // ---------- REGOLE PER IMPEDIRE ALLA TORRE DI SCAVALCARE UN PEZZO MIO FINE ----------

    case "knight":
      // MOVE KNIGHT
      if (
        (destination.x == box.x - 2 && destination.y == box.y - 1) ||
        (destination.x == box.x - 2 && destination.y == box.y + 1) ||
        (destination.x == box.x - 1 && destination.y == box.y + 2) ||
        (destination.x == box.x + 1 && destination.y == box.y + 2) ||
        (destination.x == box.x + 2 && destination.y == box.y + 1) ||
        (destination.x == box.x + 2 && destination.y == box.y - 1) ||
        (destination.x == box.x + 1 && destination.y == box.y - 2) ||
        (destination.x == box.x - 1 && destination.y == box.y - 2)
      ) {
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      } else {
        return false;
      }

    case "bishop":
      // MOVE BISHOP
      if (Math.abs(destination.x - box.x) == Math.abs(destination.y - box.y)) {
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      } else {
        return false;
      }

    case "king":
      // MOVE KING
      if (
        (destination.x == box.x - 1 && destination.y == box.y) ||
        (destination.x == box.x - 1 && destination.y == box.y + 1) ||
        (destination.x == box.x && destination.y == box.y + 1) ||
        (destination.x == box.x + 1 && destination.y == box.y + 1) ||
        (destination.x == box.x + 1 && destination.y == box.y) ||
        (destination.x == box.x + 1 && destination.y == box.y - 1) ||
        (destination.x == box.x && destination.y == box.y - 1) ||
        (destination.x == box.x - 1 && destination.y == box.y - 1)
      ) {
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      } else {
        return false;
      }
      break;

    case "queen":
      // MOVE QUEEN
      if (
        Math.abs(destination.x - box.x) == Math.abs(destination.y - box.y) ||
        destination.x == box.x ||
        destination.y == box.y
      ) {
        board[destination.x][destination.y] = {
          x: destination.x,
          y: destination.y,
          piece: box.piece,
          player: box.player,
        };

        board[box.x][box.y] = {
          x: box.x,
          y: box.y,
          piece: "",
          player: -1,
        };

        return true;
      } else {
        return false;
      }
      break;

    default:
      alert("invalid piece");
  }
}
