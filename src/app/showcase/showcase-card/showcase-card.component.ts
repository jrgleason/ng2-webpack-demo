import {Component, Input} from '@angular/core';
@Component({
    selector: 'jg-showcase-card',
    template: require('./showcase-card.component.pug'),
    styles: [require('./showcase-card.component.styl')]
})
export class ShowcaseCardComponent{
    @Input() card = { headerText : "No Header Text" };
    @Input() number: number;
    constructor(){ }
}