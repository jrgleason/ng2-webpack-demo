import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WheelService {
    wheelEmitter = new EventEmitter();
    constructor(){
        window.addEventListener("wheel", (e: any) => {
            let direction = e.deltaY < 0 ? -1 : 1;
            this.wheelEmitter.emit({direction: direction})
        });
    }
}
