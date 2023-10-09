import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-4';
  eventEmittedFromGame: number = 0
  evenNumbers: number[] = []
  oddNumbers: number[] = []




  handleEvent(event: number){
    this.eventEmittedFromGame = event
    if(event % 2 === 0){
      this.evenNumbers.push(event)
    } else{
      this.oddNumbers.push(event)
    }
  }
}
