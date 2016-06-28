import {Component} from '@angular/core';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
@Component({
    selector: 'jg-showcase',
    template: String(require('./showcase.component.pug')),
    styleUrls: [String(require('./showcase.component.styl'))],
    directives: [MD_ICON_DIRECTIVES],
    viewProviders: [MdIconRegistry]
})
export class ShowcaseComponent{
    constructor(){ }
}