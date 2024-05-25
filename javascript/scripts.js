// CREAZIONE SCACCHIERA

class Game {
    rootContainer = null;
    board = [];

    constructor(rootContainerId) {
        this.rootContainer = document.getElementById(rootContainerId);
        this.board = this.createBoard();
        this.createBoardHTMLLayout();
        this.addPieces();
    }

    createBoard() {
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

        return board;
    }

    createBoardHTMLLayout() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                const my_box = document.createElement("div");
                my_box.classList.add("square");
                my_box.setAttribute("id", [j, i]);

                if ((i + j) % 2 != 0) {
                    my_box.classList.add("bg-dark");
                } else {
                    my_box.classList.add("bg-white");
                }

                this.rootContainer.append(my_box);
            }
        }
    }

    addPieces() {
        for (let i = 0; i < this.board[0].length; i++) {
            document.getElementById(
                `${i},1`
            ).innerHTML = `<img class="w-100 h-100" src="./img/red-pawn.png" alt=""></img>`;

            this.board[i][1] = new Pawn({ player: 1, x: i, y: 1 });
        }

        for (let i = 0; i < this.board[0].length; i++) {
            document.getElementById(
                `${i},6`
            ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-pawn.png" alt=""></img>`;

            this.board[i][6] = new Pawn({ player: 0, x: i, y: 6 });
        }

        document.getElementById(
            "0,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
        this.board[0][0] = new Rook({ player: 1, x: 0, y: 0 });

        document.getElementById(
            "7,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-rook.png" alt=""></img>`;
        this.board[7][0] = new Rook({ player: 1, x: 7, y: 0 });

        document.getElementById(
            "0,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
        this.board[0][7] = new Rook({ player: 0, x: 0, y: 7 });

        document.getElementById(
            "7,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-rook.png" alt=""></img>`;
        this.board[7][7] = new Rook({ player: 0, x: 7, y: 7 });

        document.getElementById(
            "1,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
        this.board[1][0] = new Knight({ player: 1, x: 1, y: 0 });

        document.getElementById(
            "6,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-knight.png" alt=""></img>`;
        this.board[6][0] = new Knight({ player: 1, x: 6, y: 0 });

        document.getElementById(
            "1,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
        this.board[1][7] = new Knight({ player: 0, x: 1, y: 7 });

        document.getElementById(
            "6,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-knight.png" alt=""></img>`;
        this.board[6][7] = new Knight({ player: 0, x: 6, y: 7 });

        document.getElementById(
            "2,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
        this.board[2][0] = new Bishop({ player: 1, x: 2, y: 0 });

        document.getElementById(
            "5,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-bishop.png" alt=""></img>`;
        this.board[5][0] = new Bishop({ player: 1, x: 5, y: 0 });

        document.getElementById(
            "2,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
        this.board[2][7] = new Bishop({ player: 0, x: 2, y: 7 });

        document.getElementById(
            "5,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-bishop.png" alt=""></img>`;
        this.board[5][7] = new Bishop({ player: 0, x: 5, y: 7 });

        document.getElementById(
            "4,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-king.png" alt=""></img>`;
        this.board[4][0] = new King({ player: 1, x: 4, y: 0 });

        document.getElementById(
            "4,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-king.png" alt=""></img>`;
        this.board[4][7] = new King({ player: 0, x: 4, y: 7 });

        document.getElementById(
            "3,0"
        ).innerHTML = `<img class="w-100 h-100" src="./img/red-queen.png" alt=""></img>`;
        this.board[3][0] = new Queen({ player: 1, x: 3, y: 0 });

        document.getElementById(
            "3,7"
        ).innerHTML = `<img class="w-100 h-100" src="./img/yellow-queen.png" alt=""></img>`;
        this.board[3][7] = new Queen({ player: 0, x: 3, y: 7 });
    }

    applyMove(piece, destinationX, destinationY) {
        const position = { x: piece.x, y: piece.y };

        this.board[destinationX][destinationY] = piece;
        piece.x = destinationX;
        piece.y = destinationY;

        this.board[position.x][position.y] = {
            x: position.x,
            y: position.y,
            piece: "",
            player: -1,
        };

        const activeBox = document.getElementById(`${position.x},${position.y}`);
        activeBox.classList.remove("bg-primary");

        if ((position.x + position.y) % 2 != 0) {
            activeBox.classList.add("bg-dark");
        } else {
            activeBox.classList.add("bg-white");
        }

        const destinationBox = document.getElementById(`${destinationX},${destinationY}`);

        destinationBox.innerHTML = activeBox.innerHTML;
        activeBox.innerHTML = "";
    }

    isKingUnderAttack(player, piece, destination) {
        let boardCopy;

        if (piece.x === destination.x && piece.y === destination.y) {
            boardCopy = this.board;
        } else {
            boardCopy = JSON.parse(JSON.stringify(this.board));

            boardCopy[destination.x][destination.y] = {
                x: destination.x,
                y: destination.y,
                piece: piece.piece,
                player: piece.player,
            };

            boardCopy[piece.x][piece.y] = {
                x: piece.x,
                y: piece.y,
                piece: "",
                player: -1,
            };
        }

        let isUnderAttack = false;

        for (let i = 0; i < boardCopy.length; i++) {
            for (let j = 0; j < boardCopy[i].length; j++) {
                if (boardCopy[i][j].player !== -1 && boardCopy[i][j].player !== player) {
                    const p = boardCopy[i][j];

                    let captureList = [];
                    switch (p.piece) {
                        case "pawn":
                            captureList = new Pawn(p).captureList(boardCopy);
                            break;

                        case "rook":
                            captureList = new Rook(p).captureList(boardCopy);
                            break;

                        case "knight":
                            captureList = new Knight(p).captureList(boardCopy);
                            break;

                        case "bishop":
                            captureList = new Bishop(p).captureList(boardCopy);
                            break;

                        case "king":
                            captureList = new King(p).captureList(boardCopy);
                            break;

                        case "queen":
                            captureList = new Queen(p).captureList(boardCopy);
                            break;

                        default:
                            throw new Error("err");
                            break;
                    }

                    captureList.forEach((p) => {
                        if (p.piece === "king") {
                            isUnderAttack = true;
                        }
                    });
                }
            }
        }

        return isUnderAttack;
    }

    isCheckmate(player) {
        // Find the king's position
        let kingPosition = null;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j].piece === "king" && this.board[i][j].player === player) {
                    kingPosition = { x: i, y: j };
                    break;
                }
            }
        }

        if (!kingPosition) {
            throw new Error("King not found on the board");
        }

        // Check if the king is currently under attack
        if (
            !this.isKingUnderAttack(
                player,
                this.board[kingPosition.x][kingPosition.y],
                kingPosition
            )
        ) {
            return false;
        }

        // Check if the king can move to a safe position
        const kingMoves = [
            { x: kingPosition.x - 1, y: kingPosition.y },
            { x: kingPosition.x - 1, y: kingPosition.y + 1 },
            { x: kingPosition.x, y: kingPosition.y + 1 },
            { x: kingPosition.x + 1, y: kingPosition.y + 1 },
            { x: kingPosition.x + 1, y: kingPosition.y },
            { x: kingPosition.x + 1, y: kingPosition.y - 1 },
            { x: kingPosition.x, y: kingPosition.y - 1 },
            { x: kingPosition.x - 1, y: kingPosition.y - 1 },
        ];

        for (let move of kingMoves) {
            if (
                this.isWithinBounds(move) &&
                (is_empty(this.board[move.x][move.y]) ||
                    this.board[move.x][move.y].player !== player)
            ) {
                if (
                    !this.isKingUnderAttack(
                        player,
                        this.board[kingPosition.x][kingPosition.y],
                        move
                    )
                ) {
                    return false;
                }
            }
        }

        // Check if any other piece can move to protect the king
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j].player === player && this.board[i][j].piece !== "king") {
                    const piece = this.board[i][j];
                    const potentialMoves = this.getPotentialMoves(piece);

                    for (let move of potentialMoves) {
                        if (!this.isKingUnderAttack(player, piece, move)) {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }

    isWithinBounds(position) {
        return position.x >= 0 && position.x < 8 && position.y >= 0 && position.y < 8;
    }

    getPotentialMoves(piece) {
        let potentialMoves = [];

        switch (piece.piece) {
            case "pawn":
                potentialMoves = new Pawn(piece).potentialMoves(this.board);
                break;

            case "rook":
                potentialMoves = new Rook(piece).potentialMoves(this.board);
                break;

            case "knight":
                potentialMoves = new Knight(piece).potentialMoves(this.board);
                break;

            case "bishop":
                potentialMoves = new Bishop(piece).potentialMoves(this.board);
                break;

            case "queen":
                potentialMoves = new Queen(piece).potentialMoves(this.board);
                break;

            // Questo metodo viene chiamato solo per controllare se il re è sotto scacco matto.
            // Non è necessario calcolare i movimenti del re.
            //
            // case "king":
            //     potentialMoves = new King(piece).potentialMoves(this.board);
            //     break;
        }

        return potentialMoves;
    }
}

class Pawn {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "pawn";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        if (this.player == 0) {
            if (this.y == 6) {
                if (
                    (destination.x == this.x && destination.y == this.y - 1) ||
                    (destination.x == this.x && destination.y == this.y - 2)
                ) {
                    return is_empty(destination);
                }
            } else {
                // UP
                if (destination.x == this.x && destination.y == this.y - 1) {
                    return is_empty(destination);
                }
            }

            // UP-RIGHT
            if (destination.x == this.x + 1 && destination.y == this.y - 1) {
                if (is_empty(destination)) {
                    return false;
                }

                return this.player != destination.player;
            }

            // UP-LEFT
            if (destination.x == this.x - 1 && destination.y == this.y - 1) {
                if (is_empty(destination)) {
                    return false;
                }

                return this.player != destination.player;
            }
        } else if (this.player == 1) {
            if (this.y == 1) {
                if (
                    (destination.x == this.x && destination.y == this.y + 1) ||
                    (destination.x == this.x && destination.y == this.y + 2)
                ) {
                    return is_empty(destination);
                }
            } else {
                if (destination.x == this.x && destination.y == this.y + 1) {
                    return is_empty(destination);
                }
            }

            // DOWN-RIGHT
            if (destination.x == this.x + 1 && destination.y == this.y + 1) {
                if (is_empty(destination)) {
                    return false;
                }

                return this.player != destination.player;
            }

            // DOWN-LEFT
            if (destination.x == this.x - 1 && destination.y == this.y + 1) {
                if (is_empty(destination)) {
                    return false;
                }

                return this.player != destination.player;
            }
        }
    }

    potentialMoves(board) {
        const moves = [];

        if (this.player == 0) {
            if (is_empty(board[this.x][this.y - 1])) {
                moves.push(board[this.x][this.y - 1]);
            }

            if (this.y == 6) {
                if (is_empty(board[this.x][this.y - 2])) {
                    moves.push(board[this.x][this.y - 2]);
                }
            }

            if (this.x - 1 >= 0 && this.y - 1 >= 0) {
                const destination = board[this.x - 1][this.y - 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    moves.push(destination);
                }
            }

            if (this.x + 1 <= 7 && this.y - 1 >= 0) {
                const destination = board[this.x + 1][this.y - 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    moves.push(destination);
                }
            }
        } else if (this.player == 1) {
            if (is_empty(board[this.x][this.y + 1])) {
                moves.push(board[this.x][this.y + 1]);
            }

            if (this.y == 1) {
                if (is_empty(board[this.x][this.y + 2])) {
                    moves.push(board[this.x][this.y + 2]);
                }
            }

            if (this.x - 1 >= 0 && this.y + 1 <= 7) {
                const destination = board[this.x - 1][this.y + 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    moves.push(destination);
                }
            }

            if (this.x + 1 <= 7 && this.y + 1 <= 7) {
                const destination = board[this.x + 1][this.y + 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    moves.push(destination);
                }
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        if (this.player == 0) {
            if (this.x - 1 >= 0 && this.y - 1 >= 0) {
                const destination = board[this.x - 1][this.y - 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    pieces.push(destination);
                }
            }

            if (this.x + 1 <= 7 && this.y - 1 >= 0) {
                const destination = board[this.x + 1][this.y - 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    pieces.push(destination);
                }
            }
        } else if (this.player == 1) {
            if (this.x - 1 >= 0 && this.y + 1 <= 7) {
                const destination = board[this.x - 1][this.y + 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    pieces.push(destination);
                }
            }

            if (this.x + 1 <= 7 && this.y + 1 <= 7) {
                const destination = board[this.x + 1][this.y + 1];
                if (!is_empty(destination) && this.player != destination.player) {
                    pieces.push(destination);
                }
            }
        }

        return pieces;
    }
}

class Rook {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "rook";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        // MOVE ROOK

        // ---------- REGOLE PER IMPEDIRE ALLA TORRE DI SCAVALCARE UN PEZZO MIO INIZIO ----------

        // - Capire se il pezzo sta andando in basso, in alto, a sinistra, o destra.
        // - Con un ciclo for, scorri la direzione trovata al passo precedente, partendo da 'box' fino a 'destination'.
        // - In ogni iterazione del for, chiama is_empty(). Se ritorna false, esci dal ciclo e la mossa è invalida.
        // - Se tutte le chiamate a is_empty ritornano true, la mossa è valida.

        // ---------- REGOLE PER IMPEDIRE ALLA TORRE DI SCAVALCARE UN PEZZO MIO FINE ----------

        // LEFT
        if (destination.x < this.x && destination.y == this.y) {
            for (let i = this.x - 1; i >= destination.x; i--) {
                if (!is_empty(board[i][destination.y])) {
                    if (this.player != board[i][destination.y].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // UP
        if (destination.x == this.x && destination.y < this.y) {
            for (let i = this.y - 1; i >= destination.y; i--) {
                if (!is_empty(board[this.x][i])) {
                    if (this.player != board[this.x][i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT
        if (destination.x > this.x && destination.y == this.y) {
            for (let i = this.x + 1; i <= destination.x; i++) {
                if (!is_empty(board[i][destination.y])) {
                    if (this.player != board[i][destination.y].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // DOWN
        if (destination.x == this.x && destination.y > this.y) {
            for (let i = this.y + 1; i <= destination.y; i++) {
                if (!is_empty(board[this.x][i])) {
                    if (this.player != board[this.x][i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    potentialMoves(board) {
        const moves = [];

        // LEFT
        for (let i = this.x - 1; i >= 0; i--) {
            if (is_empty(board[i][this.y])) {
                moves.push(board[i][this.y]);
            } else {
                if (this.player != board[i][this.y].player) {
                    moves.push(board[i][this.y]);
                }

                break;
            }
        }

        // UP
        for (let i = this.y - 1; i >= 0; i--) {
            if (is_empty(board[this.x][i])) {
                moves.push(board[this.x][i]);
            } else {
                if (this.player != board[this.x][i].player) {
                    moves.push(board[this.x][i]);
                }

                break;
            }
        }

        // RIGHT
        for (let i = this.x + 1; i <= 7; i++) {
            if (is_empty(board[i][this.y])) {
                moves.push(board[i][this.y]);
            } else {
                if (this.player != board[i][this.y].player) {
                    moves.push(board[i][this.y]);
                }

                break;
            }
        }

        // DOWN
        for (let i = this.y + 1; i <= 7; i++) {
            if (is_empty(board[this.x][i])) {
                moves.push(board[this.x][i]);
            } else {
                if (this.player != board[this.x][i].player) {
                    moves.push(board[this.x][i]);
                }

                break;
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        // LEFT
        for (let i = this.x - 1; i >= 0; i--) {
            if (!is_empty(board[i][this.y])) {
                if (this.player != board[i][this.y].player) {
                    pieces.push(board[i][this.y]);
                    break;
                } else {
                    break;
                }
            }
        }

        // UP
        for (let i = this.y - 1; i >= 0; i--) {
            if (!is_empty(board[this.x][i])) {
                if (this.player != board[this.x][i].player) {
                    pieces.push(board[this.x][i]);
                    break;
                } else {
                    break;
                }
            }
        }

        // RIGHT
        for (let i = this.x + 1; i <= 7; i++) {
            if (!is_empty(board[i][this.y])) {
                if (this.player != board[i][this.y].player) {
                    pieces.push(board[i][this.y]);
                    break;
                } else {
                    break;
                }
            }
        }

        // DOWN
        for (let i = this.y + 1; i <= 7; i++) {
            if (!is_empty(board[this.x][i])) {
                if (this.player != board[this.x][i].player) {
                    pieces.push(board[this.x][i]);
                    break;
                } else {
                    break;
                }
            }
        }

        return pieces;
    }
}

class Knight {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "knight";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        if (
            (destination.x == this.x - 2 && destination.y == this.y - 1) ||
            (destination.x == this.x - 2 && destination.y == this.y + 1) ||
            (destination.x == this.x - 1 && destination.y == this.y + 2) ||
            (destination.x == this.x + 1 && destination.y == this.y + 2) ||
            (destination.x == this.x + 2 && destination.y == this.y + 1) ||
            (destination.x == this.x + 2 && destination.y == this.y - 1) ||
            (destination.x == this.x + 1 && destination.y == this.y - 2) ||
            (destination.x == this.x - 1 && destination.y == this.y - 2)
        ) {
            return is_empty(destination) || this.player != destination.player;
        } else {
            return false;
        }
    }

    potentialMoves(board) {
        const moves = [];

        const destinations = [
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
        ];

        for (let i = 0; i < destinations.length; i++) {
            const x = destinations[i][0];
            const y = destinations[i][1];

            if (x < 0 || x > 7 || y < 0 || y > 7) {
                continue;
            }

            const destination = board[x][y];

            if (
                is_empty(destination) ||
                (!is_empty(destination) && this.player != destination.player)
            ) {
                moves.push(destination);
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        const destinations = [
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
        ];

        for (let i = 0; i < destinations.length; i++) {
            const x = destinations[i][0];
            const y = destinations[i][1];

            if (x < 0 || x > 7 || y < 0 || y > 7) {
                continue;
            }

            const destination = board[x][y];

            if (!is_empty(destination) & (this.player != destination.player)) {
                pieces.push(destination);
            }
        }

        return pieces;
    }
}

class Bishop {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "bishop";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        const x_diff = destination.x - this.x;
        const y_diff = destination.y - this.y;
        const number_of_moves = Math.abs(x_diff);

        if (Math.abs(x_diff) != Math.abs(y_diff)) {
            return false;
        }

        // Se stiamo qui, sappiamo che
        // Math.abs(x_diff) == Math.abs(y_diff)

        // LEFT-DOWN
        if (x_diff < 0 && y_diff > 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(board[this.x - i][this.y + i])) {
                    if (this.player != board[this.x - i][this.y + 1].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // LEFT-UP
        if (x_diff < 0 && y_diff < 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(board[this.x - i][this.y - i])) {
                    if (this.player != board[this.x - i][this.y - i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT-UP
        if (x_diff > 0 && y_diff < 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(board[this.x + i][this.y - i])) {
                    if (this.player != board[this.x + i][this.y - i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT-DOWN
        if (x_diff > 0 && y_diff > 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(board[this.x + i][this.y + i])) {
                    if (this.player != board[this.x + i][this.y + i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    potentialMoves(board) {
        const moves = [];

        // LEFT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x - i][this.y + i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // LEFT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x - i][this.y - i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // RIGHT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x + i][this.y - i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // RIGHT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x + i][this.y + i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        // LEFT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x - i][this.y + i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // LEFT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x - i][this.y - i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // RIGHT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x + i][this.y - i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // RIGHT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x + i][this.y + i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        return pieces;
    }
}

class King {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "king";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        if (
            (destination.x == this.x - 1 && destination.y == this.y) ||
            (destination.x == this.x - 1 && destination.y == this.y + 1) ||
            (destination.x == this.x && destination.y == this.y + 1) ||
            (destination.x == this.x + 1 && destination.y == this.y + 1) ||
            (destination.x == this.x + 1 && destination.y == this.y) ||
            (destination.x == this.x + 1 && destination.y == this.y - 1) ||
            (destination.x == this.x && destination.y == this.y - 1) ||
            (destination.x == this.x - 1 && destination.y == this.y - 1)
        ) {
            return is_empty(destination) || this.player != destination.player;
        } else {
            return false;
        }
    }

    potentialMoves(board) {
        const moves = [];

        const destinations = [
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y - 1],
        ];

        for (let i = 0; i < destinations.length; i++) {
            const x = destinations[i][0];
            const y = destinations[i][1];

            if (x < 0 || x > 7 || y < 0 || y > 7) {
                continue;
            }

            const destination = board[x][y];

            if (
                is_empty(destination) ||
                (!is_empty(destination) && this.player != destination.player)
            ) {
                moves.push(destination);
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        const destinations = [
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y - 1],
        ];

        for (let i = 0; i < destinations.length; i++) {
            const x = destinations[i][0];
            const y = destinations[i][1];

            if (x < 0 || x > 7 || y < 0 || y > 7) {
                continue;
            }

            const destination = board[x][y];

            if (!is_empty(destination) & (this.player != destination.player)) {
                pieces.push(destination);
            }
        }

        return pieces;
    }
}

class Queen {
    piece;
    player;
    x;
    y;

    constructor({ player, x, y }) {
        this.piece = "queen";
        this.player = player;
        this.x = x;
        this.y = y;
    }

    isValidMove(board, destination) {
        const x_diff = destination.x - this.x;
        const y_diff = destination.y - this.y;
        const number_of_moves = Math.abs(x_diff);

        // LEFT
        if (destination.x < this.x && destination.y == this.y) {
            for (let i = this.x - 1; i >= destination.x; i--) {
                if (!is_empty(game.board[i][destination.y])) {
                    if (this.player != game.board[i][destination.y].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // UP
        if (destination.x == this.x && destination.y < this.y) {
            for (let i = this.y - 1; i >= destination.y; i--) {
                if (!is_empty(game.board[this.x][i])) {
                    if (this.player != game.board[this.x][i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT
        if (destination.x > this.x && destination.y == this.y) {
            for (let i = this.x + 1; i <= destination.x; i++) {
                if (!is_empty(game.board[i][destination.y])) {
                    if (this.player != game.board[i][destination.y].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // DOWN
        if (destination.x == this.x && destination.y > this.y) {
            for (let i = this.y + 1; i <= destination.y; i++) {
                if (!is_empty(game.board[this.x][i])) {
                    if (this.player != game.board[this.x][i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        if (Math.abs(x_diff) != Math.abs(y_diff)) {
            return false;
        }

        // LEFT-DOWN
        if (x_diff < 0 && y_diff > 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(game.board[this.x - i][this.y + i])) {
                    if (this.player != game.board[this.x - i][this.y + i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // LEFT-UP
        if (x_diff < 0 && y_diff < 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(game.board[this.x - i][this.y - i])) {
                    if (this.player != game.board[this.x - i][this.y - i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT-UP
        if (x_diff > 0 && y_diff < 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(game.board[this.x + i][this.y - i])) {
                    if (this.player != game.board[this.x + i][this.y - i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        // RIGHT-DOWN
        if (x_diff > 0 && y_diff > 0) {
            for (let i = 1; i <= number_of_moves; i++) {
                if (!is_empty(game.board[this.x + i][this.y + i])) {
                    if (this.player != game.board[this.x + i][this.y + i].player) {
                        // Break esce dal ciclo for.
                        break;
                    }
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    potentialMoves(board) {
        const moves = [];

        // LEFT
        for (let i = this.x - 1; i >= 0; i--) {
            if (is_empty(board[i][this.y])) {
                moves.push(board[i][this.y]);
            } else {
                if (this.player != board[i][this.y].player) {
                    moves.push(board[i][this.y]);
                }

                break;
            }
        }

        // UP
        for (let i = this.y - 1; i >= 0; i--) {
            if (is_empty(board[this.x][i])) {
                moves.push(board[this.x][i]);
            } else {
                if (this.player != board[this.x][i].player) {
                    moves.push(board[this.x][i]);
                }

                break;
            }
        }

        // RIGHT
        for (let i = this.x + 1; i <= 7; i++) {
            if (is_empty(board[i][this.y])) {
                moves.push(board[i][this.y]);
            } else {
                if (this.player != board[i][this.y].player) {
                    moves.push(board[i][this.y]);
                }

                break;
            }
        }

        // DOWN
        for (let i = this.y + 1; i <= 7; i++) {
            if (is_empty(board[this.x][i])) {
                moves.push(board[this.x][i]);
            } else {
                if (this.player != board[this.x][i].player) {
                    moves.push(board[this.x][i]);
                }

                break;
            }
        }

        // LEFT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x - i][this.y + i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // LEFT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x - i][this.y - i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // RIGHT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x + i][this.y - i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        // RIGHT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x + i][this.y + i];

            if (is_empty(destination)) {
                moves.push(destination);
            } else {
                if (this.player != destination.player) {
                    moves.push(destination);
                }

                break;
            }
        }

        return moves;
    }

    captureList(board) {
        const pieces = [];

        // LEFT
        for (let i = this.x - 1; i >= 0; i--) {
            if (!is_empty(board[i][this.y])) {
                if (this.player != board[i][this.y].player) {
                    pieces.push(board[i][this.y]);
                    break;
                } else {
                    break;
                }
            }
        }

        // UP
        for (let i = this.y - 1; i >= 0; i--) {
            if (!is_empty(board[this.x][i])) {
                if (this.player != board[this.x][i].player) {
                    pieces.push(board[this.x][i]);
                    break;
                } else {
                    break;
                }
            }
        }

        // RIGHT
        for (let i = this.x + 1; i <= 7; i++) {
            if (!is_empty(board[i][this.y])) {
                if (this.player != board[i][this.y].player) {
                    pieces.push(board[i][this.y]);
                    break;
                } else {
                    break;
                }
            }
        }

        // DOWN
        for (let i = this.y + 1; i <= 7; i++) {
            if (!is_empty(board[this.x][i])) {
                if (this.player != board[this.x][i].player) {
                    pieces.push(board[this.x][i]);
                    break;
                } else {
                    break;
                }
            }
        }

        // LEFT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x - i][this.y + i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // LEFT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x - i < 0 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x - i][this.y - i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // RIGHT-UP
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y - i < 0) {
                break;
            }

            const destination = board[this.x + i][this.y - i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        // RIGHT-DOWN
        for (let i = 1; i <= 7; i++) {
            if (this.x + i > 7 || this.y + i > 7) {
                break;
            }

            const destination = board[this.x + i][this.y + i];

            if (!is_empty(destination) && this.player == destination.player) {
                break;
            }

            if (!is_empty(destination) && this.player != destination.player) {
                pieces.push(destination);
                break;
            }
        }

        return pieces;
    }
}

const game = new Game("chess-container");

// GESTIONE CLICK
let active = false;
let clicked_box = null;
let active_box = null;
let turn = 0;
let isCheckmate = false;

for (let i = 0; i < game.board.length; i++) {
    for (let j = 0; j < game.board[i].length; j++) {
        const my_box = document.getElementById(`${j},${i}`);

        my_box.addEventListener("click", function () {
            if (isCheckmate) {
                alert("Game over!");
                return;
            }

            clicked_box = game.board[j][i];

            const adesso_ho_cliccato_la_casella_che_voglio_muovere =
                active == false && clicked_box.player == 0 && is_even(turn) == true;

            if (adesso_ho_cliccato_la_casella_che_voglio_muovere) {
                active_box = game.board[j][i];
                active = true;

                const active_box_html = document.getElementById(`${active_box.x},${active_box.y}`);

                active_box_html.classList.remove("bg-white");
                active_box_html.classList.remove("bg-dark");
                active_box_html.classList.add("bg-primary");

                const captureList = active_box.captureList(game.board);
                console.log("captureList: ", captureList);

                captureList.forEach((piece) => {
                    const piece_html = document.getElementById(`${piece.x},${piece.y}`);
                    piece_html.classList.remove("bg-white");
                    piece_html.classList.remove("bg-dark");
                    piece_html.classList.add("bg-danger");
                });

                return;
            }

            const adesso_ho_cliccato_la_casella_che_voglio_muovere_degli_avversari =
                active == false && clicked_box.player == 1 && is_even(turn) == false;

            if (adesso_ho_cliccato_la_casella_che_voglio_muovere_degli_avversari) {
                active_box = game.board[j][i];
                active = true;

                const active_box_html = document.getElementById(`${active_box.x},${active_box.y}`);

                active_box_html.classList.remove("bg-white");
                active_box_html.classList.remove("bg-dark");
                active_box_html.classList.add("bg-primary");

                const captureList = active_box.captureList(game.board);
                console.log("captureList: ", captureList);

                captureList.forEach((piece) => {
                    const piece_html = document.getElementById(`${piece.x},${piece.y}`);
                    piece_html.classList.remove("bg-white");
                    piece_html.classList.remove("bg-dark");
                    piece_html.classList.add("bg-danger");
                });

                console.log("Hai cliccato la casella: ", active_box);
                return;
            }

            // Questa if vuol dire che se active è false in questo momento non c'è nessuna casella attiva, perciò
            // il resto del codice non ha senso girarlo e quindi esci.
            const adesso_ho_cliccato_la_casella_dove_voglio_andare = active == true;
            if (!adesso_ho_cliccato_la_casella_dove_voglio_andare) {
                return;
            }

            removeRedCells();

            const casella_vuota = is_empty(clicked_box);

            const casella_altro_giocatore = clicked_box.player != active_box.player;

            if (adesso_ho_cliccato_la_casella_dove_voglio_andare) {
                if (
                    clicked_box.x == active_box.x &&
                    clicked_box.y == active_box.y &&
                    clicked_box.player == active_box.player &&
                    clicked_box.piece == active_box.piece
                ) {
                    console.log("Hai disattivato la casella: ", active_box);
                    const my_active_box_html = document.getElementById(
                        `${active_box.x},${active_box.y}`
                    );
                    my_active_box_html.classList.remove("bg-primary");

                    if ((active_box.x + active_box.y) % 2 != 0) {
                        my_active_box_html.classList.add("bg-dark");
                    } else {
                        my_active_box_html.classList.add("bg-white");
                    }
                    active = false;
                    active_box = null;

                    return;
                }
            }

            if (
                adesso_ho_cliccato_la_casella_dove_voglio_andare &&
                (casella_vuota || casella_altro_giocatore)
            ) {
                if (active_box.isValidMove(game.board, clicked_box)) {
                    if (game.isKingUnderAttack(active_box.player, active_box, clicked_box)) {
                        alert("Invalid move. Your king is under attack!");
                        return;
                    }

                    if (active_box.player == 0) {
                        if (game.isKingUnderAttack(1, active_box, clicked_box)) {
                            alert("Well done. The other king is under attack!");
                        }
                    } else {
                        if (game.isKingUnderAttack(0, active_box, clicked_box)) {
                            alert("Well done. The other king is under attack!");
                        }
                    }

                    game.applyMove(active_box, clicked_box.x, clicked_box.y);

                    if (active_box.player == 0) {
                        if (game.isCheckmate(1)) {
                            alert("Checkmate! Player 0 wins!");
                            isCheckmate = true;
                            return;
                        }
                    } else {
                        if (game.isCheckmate(0)) {
                            alert("Checkmate! Player 1 wins!");
                            isCheckmate = true;
                            return;
                        }
                    }

                    console.log("Sei andato sulla casella: ", clicked_box);
                    active = false;
                    active_box = null;
                    turn++;
                } else {
                    alert("Invalid move");
                }

                return;
            }
        });
    }
}

function is_empty(box) {
    if (box.player !== -1) {
        return false;
    }

    return !(
        box instanceof Pawn ||
        box instanceof Rook ||
        box instanceof Knight ||
        box instanceof Bishop ||
        box instanceof King ||
        box instanceof Queen
    );
}

function is_even(n) {
    return n == 0 || n % 2 == 0;
}

function removeRedCells() {
    for (let i = 0; i < game.board.length; i++) {
        for (let j = 0; j < game.board[i].length; j++) {
            const my_box = document.getElementById(`${i},${j}`);

            if (my_box.classList.contains("bg-primary")) {
                continue;
            }

            my_box.classList.remove("bg-danger");

            if ((i + j) % 2 != 0) {
                my_box.classList.add("bg-dark");
            } else {
                my_box.classList.add("bg-white");
            }
        }
    }
}
