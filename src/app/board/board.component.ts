import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[] = [];
  xIsNext?: boolean;
  winner?: string;

  constructor() { }

  // On component initialization, create a new game.
  ngOnInit(): void {
    this.newGame();
  }

  // Reset the game for a new game by:
  // Fill the empty array with nine null values
  // Sets the winner to an empty string
  // Sets xIsNext to true thus the first move is always an X
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  // Gets the current player.
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // Checks if the box clicked is null or filled
  // Replaces the value of the box clicked to the current player.
  // Switches the player by setting xIsNext to false.
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    // After every move, check for a winner.
    this.winner = this.calculateWinner();
  }

  // Calculates the winner of the Match
  // const lines has all the possible winning combinations
  // Loop over lines to check for each possible win combination
  // Check if the input in the squares array at the three win combinations match exactly then declare a winner.
  // Else return null
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
