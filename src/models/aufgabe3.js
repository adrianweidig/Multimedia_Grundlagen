// Normalerweise mache ich Funktionen immer deutsch aber da manche schon auf Englisch waren, habe ich dies beibehalten

export function getColumnIndex(index) {
    return index % this.gridSize;
}

export function getRowIndex(index) {
    return Math.floor(index / this.gridSize);
}

export function isActiveRowColumn(index) {
    if (this.activePlayer === 0) {
        return this.getRowIndex(index) === this.activeRow;
    } else {
        return this.getColumnIndex(index) === this.activeColumn;
    }
}

export function isDiscovered(index) {
    return this.pictureCards[index].discovered;
}

export function clickMethod(index) {
    if (this.isDiscovered(index) || !this.isActiveRowColumn(index)) {
        return; // Klick ignorieren, wenn die Karte schon entdeckt ist oder inaktiver Bereich
    }

    // Punkte Spieler hinzufügen
    if (this.activePlayer === 0) {
        this.scorePlayer1 += this.pictureCards[index].value;
    } else {
        this.scorePlayer2 += this.pictureCards[index].value;
    }

    // Karte entdeckt
    this.pictureCards[index].discovered = true;

    // Nächste aktive Zeile/Spalte
    if (this.activePlayer === 0) {
        this.activeColumn = this.getColumnIndex(index);
    } else {
        this.activeRow = this.getRowIndex(index);
    }

    // Spieler wechseln
    this.activePlayer = 1 - this.activePlayer;
    console.log("Aktiver Spieler:" + (this.activePlayer + 1))
}

export function computerMove() {
    let bestMove = -Infinity;
    let bestIndex = -1;

    // Alle möglichen Züge in der aktuellen Spalte überprüfen
    for (let i = 0; i < this.gridSize; i++) {
        const rowIndex = i * this.gridSize + this.activeColumn; // Aktuelle Spalte überprüfen
        if (this.isDiscovered(rowIndex)) {
            continue; // Überspringe bereits entdeckte Karten
        }

        let maxInRow = -Infinity;

        // Finde das Maximum in der Zeile
        for (let j = 0; j < this.gridSize; j++) {
            const index = i * this.gridSize + j;
            if (!this.isDiscovered(index) && this.pictureCards[index].value > maxInRow) {
                maxInRow = this.pictureCards[index].value;
            }
        }

        const potentialMoveValue = this.pictureCards[rowIndex].value - maxInRow;

        if (potentialMoveValue > bestMove) {
            bestMove = potentialMoveValue;
            bestIndex = rowIndex;
        }
    }

    if (bestIndex !== -1) {
        this.clickMethod(bestIndex);
    }
}


export function initializeGame() {
    const imagePositives = [
        {pic: 'src/assets/img/p1.png', value: 1, discovered: false},
        {pic: 'src/assets/img/p2.png', value: 2, discovered: false},
        {pic: 'src/assets/img/p3.png', value: 3, discovered: false},
        {pic: 'src/assets/img/p4.png', value: 4, discovered: false},
        {pic: 'src/assets/img/p5.png', value: 5, discovered: false},
        {pic: 'src/assets/img/p6.png', value: 6, discovered: false},
        {pic: 'src/assets/img/p7.png', value: 7, discovered: false},
        {pic: 'src/assets/img/p8.png', value: 8, discovered: false},
        {pic: 'src/assets/img/p9.png', value: 9, discovered: false},
        {pic: 'src/assets/img/p10.png', value: 10, discovered: false}
    ];
    const imageNegatives = [
        {pic: 'src/assets/img/m1.png', value: -1, discovered: false},
        {pic: 'src/assets/img/m2.png', value: -2, discovered: false},
        {pic: 'src/assets/img/m3.png', value: -3, discovered: false},
        {pic: 'src/assets/img/m4.png', value: -4, discovered: false},
        {pic: 'src/assets/img/m5.png', value: -5, discovered: false},
        {pic: 'src/assets/img/m6.png', value: -6, discovered: false},
        {pic: 'src/assets/img/m7.png', value: -7, discovered: false},
        {pic: 'src/assets/img/m8.png', value: -8, discovered: false},
        {pic: 'src/assets/img/m9.png', value: -9, discovered: false},
        {pic: 'src/assets/img/m10.png', value: -10, discovered: false}
    ];
    const images = new Array(this.gridSize * this.gridSize);
    for (let i = 0; i < images.length / 2; i++) {
        images[i] = imagePositives[Math.floor(Math.random() * imagePositives.length)];
        images[i + images.length / 2] = imageNegatives[Math.floor(Math.random() * imageNegatives.length)];
    }
    this.shuffleArray(images);
    this.pictureCards = JSON.parse(JSON.stringify(images));
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
