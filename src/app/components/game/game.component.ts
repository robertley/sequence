import { Component, OnInit } from '@angular/core';
import { Deck, createShuffledDeck} from 'src/app/interfaces/deck.interface';
import { Board, createBoard } from 'src/app/interfaces/board.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  deck: Deck;
  board: Board;

  constructor() {
    this.deck = createShuffledDeck();
    this.board = createBoard();
    console.log(this.deck)
    console.log(this.board);
  }

  ngOnInit(): void {
  }

}
