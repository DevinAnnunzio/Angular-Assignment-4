import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponentComponent } from './game-control/game-control-component/game-control-component.component';
import { OddComponentComponent } from './game-control/odd-component/odd-component.component';
import { EvenComponentComponent } from './game-control/even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponentComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
