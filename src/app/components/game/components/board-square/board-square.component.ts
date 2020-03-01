import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Boardspace } from 'src/app/interfaces/boardspace.interface';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent implements OnInit, OnChanges {

  @Input()
  boardspace: Boardspace;

  @Input()
  playerHand: Card[];

  selectable: boolean;

  constructor() { }

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

}
