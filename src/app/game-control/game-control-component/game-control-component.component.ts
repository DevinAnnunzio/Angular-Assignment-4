import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent {
  intervalId: any
  numberTracker: number= 0;
  @Output() countEvent = new EventEmitter<number>();

  //Testing to see if I can retrieve child components
  // @ViewChild()


  startEmitting(){
    console.log("Event has started")
    console.log('----------------------------------')
    this.intervalId = setInterval(() => {
      console.log("HERERREREREER");
      console.log(this.numberTracker)
      // Code to execute at each interval
      this.countEvent.emit(this.numberTracker);
      this.numberTracker++;
    }, 1000); // 1000 milliseconds (1 second) interval
  }

  stopEmitting(){
    clearInterval(this.intervalId);
  }
}
