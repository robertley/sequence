import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Boardspace } from 'src/app/interfaces/boardspace.interface';
import { Card } from 'src/app/interfaces/card.interface';
import { GameService } from 'src/app/services/game.service';
import { Player } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent implements OnInit, OnChanges {

  @Input()
  boardspace: Boardspace;

  selectable: boolean;

  player: Player;
  playerHand: Card[];

  constructor(private gameService: GameService) {
    this.player = gameService.player;
    this.playerHand = this.player.hand;
  }

  ngOnInit(): void {
    this.calculateSelectable();
  }

  ngOnChanges() {
    console.log("changes")
    this.calculateSelectable();
  }

  calculateSelectable() {
    for (let card of this.playerHand) {
      if ((card.key === this.boardspace.cardKey) && this.boardspace.occupiedBy === 0) {
        this.selectable = true;
        break;
      } else {
        this.selectable = false;
      }
    }
  }

  playerMove() {
    if (this.selectable && this.boardspace.occupiedBy === 0) {
      this.gameService.doTurn(this.player, this.boardspace.key)
    }
  }

}
