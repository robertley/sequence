import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-player-ui',
  templateUrl: './player-ui.component.html',
  styleUrls: ['./player-ui.component.scss']
})
export class PlayerUiComponent implements OnInit {

  @Input()
  player: Player;

  constructor() { }

  ngOnInit(): void {
    console.log(this.player)
  }

}
