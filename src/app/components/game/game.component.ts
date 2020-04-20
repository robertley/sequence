import { Component, OnInit } from '@angular/core';
import { Deck, createShuffledDeck} from 'src/app/interfaces/deck.interface';
import { Board, createBoard } from 'src/app/interfaces/board.interface'; 
import { Player, createPlayer } from 'src/app/interfaces/player.interface'; 
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  deck: Deck;
  board: Board;
  player: Player;
  cpu: Player;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.deck = this.gameService.deck;
    this.board = this.gameService.board;
    this.player = this.gameService.player;
  }

}
