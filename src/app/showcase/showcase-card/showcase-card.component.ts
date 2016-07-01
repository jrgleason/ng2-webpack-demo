import {Component, Input} from '@angular/core';
@Component({
    selector: 'jg-showcase-card',
    template: String(require('./showcase-card.component.pug')),
    styles: [String(require('./showcase-card.component.styl'))]
})
export class ShowcaseCardComponent{
    @Input() card = { headerText : "No Header Text" };
    constructor(){ }
}