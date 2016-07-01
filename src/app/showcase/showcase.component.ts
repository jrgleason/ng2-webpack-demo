import {Component, OnDestroy} from '@angular/core';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {ShowcaseCardComponent} from "./showcase-card/showcase-card.component";
import { WheelService } from "../../wheel/wheel.service";
@Component({
    selector: 'jg-showcase',
    template: String(require('./showcase.component.pug')),
    styles: [String(require('./showcase.component.styl'))],
    directives: [MD_ICON_DIRECTIVES, ShowcaseCardComponent],
    viewProviders: [MdIconRegistry]
})
export class ShowcaseComponent implements OnDestroy{
    currentCard: number = 0;
    subscription: any;
    cards = [
        {
            number: 0,
            color: "blue",
            content: "<h1>Card1</h1>"
        },
        {
            number: 1,
            content: "<h1>Card2</h1>"
        }
    ];
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