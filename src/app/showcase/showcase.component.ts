import {Component, OnDestroy, Input} from '@angular/core';
import { WheelService } from "../../wheel/wheel.service";
@Component({
    selector: 'jg-showcase',
    template: require('./showcase.component.pug'),
    styles: [require('./showcase.component.styl')],
})
export class ShowcaseComponent implements OnDestroy{
    currentCard: number = 0;
    subscription: any;
    @Input() cards : any[];
    constructor(wheelService: WheelService){
        this.subscription = wheelService.wheelEmitter.subscribe((data: any) => {
           if(data.direction > 0 && this.currentCard !== (this.cards.length-1)){
               this.currentCard++;
           }
           else if(data.direction < 0 && this.currentCard){
               this.currentCard--;
           }
        }, this)
    };
    ngOnDestroy() {
        this.subscription.dispose();
    };
}