import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent {
  @Output() countEvent = new EventEmitter<string>();
  
  intervalId: any
  numberTracker: number = 0

  startEmitting(event: EventEmitter<string>){
    console.log("Event has started")
    console.log(event)
    console.log('----------------------------------')
    this.intervalId = setInterval(() => {
      // Code to execute at each interval
      this.countEvent.emit(`Event being emitted ${this.numberTracker}`);
      this.numberTracker++;
    }, 1000); // 1000 milliseconds (1 second) interval
  }

  stopEmitting(){
    clearInterval(this.intervalId);
  }
}
