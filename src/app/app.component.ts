import { Component } from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from "@angular2-material/icon";
import { HTTP_PROVIDERS } from '@angular/http';
@Component({
    selector: 'my-app',
    template: require('./app.component.pug'),
    styles: [require('./app.component.css')],
    directives: [
        MD_ICON_DIRECTIVES
    ],
    viewProviders: [ MdIconRegistry ]
})
export class AppComponent {
    constructor(){

    }
}
