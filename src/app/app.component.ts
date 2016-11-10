import { Component } from '@angular/core';
import { CardsService } from "../cards/cards.service";
// TODO: there has got to be a way to make this 1 import statement instead of 2
@Component({
    selector: 'my-app',
    template: require('./app.component.pug'),
    styles: [require('./app.component.styl')]
})
export class AppComponent {
    cards : any[];
    constructor(cardsService : CardsService){
        this.cards = cardsService.cards
    }
}
