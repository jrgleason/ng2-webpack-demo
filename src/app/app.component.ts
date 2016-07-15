import { Component } from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from "@angular2-material/icon";
// TODO: there has got to be a way to make this 1 import statement instead of 2
import { NavbarComponent } from "./navbar/navbar.component"
import { ShowcaseComponent } from "./showcase/showcase.component"
@Component({
    selector: 'my-app',
    template: String(require('./app.component.pug')),
    styles: [String(require('./app.component.styl'))],
    directives: [
        MD_ICON_DIRECTIVES, NavbarComponent, ShowcaseComponent
    ],
    viewProviders: [ MdIconRegistry ]
})
export class AppComponent {
    cards = require('./jg/cards/cards.json');
    constructor(){
        console.log(this.cards.config);
    }
}
