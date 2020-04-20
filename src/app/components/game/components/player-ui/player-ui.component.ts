import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player-ui',
  templateUrl: './player-ui.component.html',
  styleUrls: ['./player-ui.component.scss']
})
export class PlayerUiComponent implements OnInit {

  player: Player;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.player = this.gameService.player;
  }

}
