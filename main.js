const board = {

  currentBoardState: {
            pegs: [["3", "2", "1"],
                [],
                []],
            moves: 0,
            peg: "---",
            pegCount: 3
  },

  printBoard: function() {
    this.currentBoardState.pegs.map((row) => {
      let boardToPrint = row.join(' ');
      console.log(this.currentBoardState.peg, boardToPrint);
    });
  },

  validateMove: function(startingPeg) {
    var initialPeg = this.currentBoardState.pegs[startingPeg - 1];
    const validPegs = this.currentBoardState.pegs.filter(peg =>
      !initialPeg[initialPeg.length - 1]
      || (peg[peg.length - 1] > initialPeg[initialPeg.length - 1]
      || !peg[peg.length - 1])
      && peg !== initialPeg);

    return validPegs;
},

  moveDisc: function(startingPeg, endingPeg) {
    var initialPeg = this.currentBoardState.pegs[startingPeg - 1];
    var endPeg = this.currentBoardState.pegs[endingPeg - 1];
    if (this.validateMove(startingPeg).includes(endPeg)) {
      const discToMove = initialPeg.pop();
      endPeg.push(discToMove);
      this.currentBoardState.moves += 1;
      console.log(this.currentBoardState.moves);
      this.checkWinner();
    }
    this.printBoard();
  },

  checkWinner: function() {
    var winner = this.currentBoardState.pegs.reduce((acc, peg, i) => {
      if (peg.length === this.currentBoardState.pegCount && i !== 0)  {
        return [].concat(acc, peg)
      } else {
        return acc;
      }
    }, []);

    if (winner.length === this.currentBoardState.pegCount) {
      this.printBoard();
      console.log('You won in ' + this.currentBoardState.moves + ' moves! Resetting game...');
      this.resetGame();
    }
  },

  resetGame: function() {
    this.currentBoardState = {
              pegs: [["3", "2", "1"],
                  [],
                  []],
              moves: 0,
              peg: "---",
              pegCount: 3
    };

    this.printBoard();
  }
}

const myBoard = Object.create(board);

myBoard.printBoard();
myBoard.moveDisc(1, 2);
myBoard.moveDisc(1, 3);
myBoard.moveDisc(2, 3);
myBoard.moveDisc(1, 2);
myBoard.moveDisc(3, 1);
myBoard.moveDisc(3, 2);
myBoard.moveDisc(1, 2);
// end of first game
myBoard.moveDisc(1, 2);
myBoard.moveDisc(1, 3);
myBoard.moveDisc(2, 3);
myBoard.moveDisc(1, 2);
myBoard.moveDisc(3, 1);
myBoard.moveDisc(3, 2);
myBoard.moveDisc(1, 2);
// end of second game
myBoard.moveDisc(1, 2);
myBoard.moveDisc(1, 3);
myBoard.moveDisc(2, 3);
myBoard.moveDisc(1, 2);
myBoard.moveDisc(3, 1);
myBoard.moveDisc(3, 2);
myBoard.moveDisc(1, 2);
