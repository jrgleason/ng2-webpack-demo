import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
/*
For ref: http://stackoverflow.com/questions/26326958/stopping-mousewheel-event-from-happening-twice-in-osx
 */
export class WheelService {
    wheelEmitter = new EventEmitter();
    private prevTime = new Date().getTime();
    private reset = true;
    constructor(){
        // TODO: Get this working
        // var scroller = new FTScroller(window, {});
        window.addEventListener("wheel", (e: any) => {
          var curTime = new Date().getTime();
          if(this.prevTime){
            var timeDiff = curTime-this.prevTime;
            if(timeDiff>1000){
              if(e.deltaY === 0) {
                this.reset = true;
              }
              else if(this.reset && e.deltaY > 10 || e.deltaY < -10){
                let direction = e.deltaY < 0 ? -1 : 1;
                this.wheelEmitter.emit({direction: direction});
                this.reset = false;
              }
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
