import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {
    cards = [
        {
            "number": 0,
            "color":  "blue",
            "content": require('./card1.pug')
        },
        {
            "number": 1,
            "content": require('./card2.pug')
        },
        {
            "number": 2,
            "content": require('./card3.pug')
        }
    ];
    constructor(){}
}