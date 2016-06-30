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
            headerText: "Card1"
        },
        {
            number: 1,
            headerText: "Card2"
        }
    ];
    constructor(wheelService: WheelService){
        this.subscription = wheelService.wheelEmitter.subscribe((data: any) => {
           if(data.direction > 0){
               this.currentCard++;
           }
           else if(this.currentCard){
               this.currentCard--;
           }
           console.log("Current Card "+this.currentCard);
        })
    };
    ngOnDestroy() {
        this.subscription.dispose();
    };
}