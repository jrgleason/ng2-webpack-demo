import {Component, Input} from '@angular/core';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
@Component({
    selector: 'jg-navbar',
    template: String(require('./navbar.component.pug')),
    styleUrls: [String(require('./navbar.component.styl'))],
    directives: [MD_ICON_DIRECTIVES],
    viewProviders: [MdIconRegistry]
})
export class NavbarComponent{
    @Input() iconSize = "40px";
    constructor(){
    }
}