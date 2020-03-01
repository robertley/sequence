import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BoardSquareComponent } from './components/game/components/board-square/board-square.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
