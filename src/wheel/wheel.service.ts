import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WheelService {
    wheelEmitter = new EventEmitter();
    private prevTime = new Date().getTime();
    constructor(){
        window.addEventListener("wheel", (e: any) => {
          var curTime = new Date().getTime();
          if(this.prevTime){
            var timeDiff = curTime-this.prevTime;
            if(timeDiff>500 && e.deltaY !== 0){
              let direction = e.deltaY < 0 ? -1 : 1;
              this.wheelEmitter.emit({direction: direction});
              this.prevTime = curTime;
            }
          }
          else{
            this.prevTime = curTime;
          }
        });
    }
}
