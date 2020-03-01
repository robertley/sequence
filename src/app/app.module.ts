import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BoardSquareComponent } from './components/game/components/board-square/board-square.component';
import { PlayerUiComponent } from './components/game/components/player-ui/player-ui.component';
import { CardComponent } from './components/game/components/player-ui/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardSquareComponent,
    PlayerUiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
