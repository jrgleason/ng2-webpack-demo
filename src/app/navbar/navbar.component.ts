import {Component, Input} from '@angular/core';
@Component({
    selector: 'jg-navbar',
    template: require('./navbar.component.pug'),
    styles: [require('./navbar.component.styl')],
})
export class NavbarComponent{
    @Input() iconSize = "40px";
    constructor(){
    }
}