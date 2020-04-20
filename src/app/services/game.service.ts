import { Injectable } from '@angular/core';
import { Deck, createShuffledDeck } from '../interfaces/deck.interface';
import { Board, createBoard } from '../interfaces/board.interface';
import { Player, createPlayer } from '../interfaces/player.interface';
import { Boardspace } from '../interfaces/boardspace.interface';
import * as _ from 'lodash';

@Injectable(
  {providedIn: 'root'}
)
export class GameService {

  deck: Deck;
  board: Board;
  player: Player;
  cpu: Player;

   constructor() {
    this.deck = createShuffledDeck();
    this.board = createBoard();
    this.player = createPlayer();
    this.player.key = 1;
    this.cpu = createPlayer();
    
    this.drawSeven(this.player);
    this.drawSeven(this.cpu);
    // console.log(this.deck);
    console.log(this.board);
    // console.log(this.player);
    // console.log(this.deck);
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

  doTurn(player: Player, boardspaceKey: string) {
    console.log("doing turn")
    let boardspace: Boardspace = this.board.boardspaceMap.get(boardspaceKey);
    boardspace.occupiedBy = player.key;
    this.discard(player, boardspace);
    this.draw(player);
  }

  discard(player: Player, boardspace: Boardspace) {
    let index = _.findIndex(player.hand, {key: boardspace.cardKey});
    player.hand.splice(index, 1);
  }

  draw(player) {
    player.hand.push(this.deck.cards.pop());
  }


}
  