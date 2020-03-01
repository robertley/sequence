import { Component, OnInit } from '@angular/core';
import { Deck, createShuffledDeck} from 'src/app/interfaces/deck.interface';
import { Board, createBoard } from 'src/app/interfaces/board.interface'; 
import { Player, createPlayer } from 'src/app/interfaces/player.interface'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  deck: Deck;
  board: Board;
  player: Player;

  constructor() {
    this.deck = createShuffledDeck();
    this.board = createBoard();
    this.player = createPlayer();
    
    this.drawSeven(this.player);
    // console.log(this.deck);
    // console.log(this.board);
    // console.log(this.player);
    // console.log(this.deck);
  }

  ngOnInit(): void {
  }

  drawSeven(player: Player) {
    for (let i = 0; i < 7; i++) {
      player.hand.push(this.deck.cards.pop())
    }
  }

  newHand() {
    this.player.hand = [];
    this.drawSeven(this.player);
  }

}
