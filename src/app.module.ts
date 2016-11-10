import { HttpModule } from '@angular/http';
import { AppComponent } from "./app/app.component";
import { WheelService } from "./wheel/wheel.service";
import { CardsService } from "./cards/cards.service";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { MaterialModule } from "@angular/material";
import {NavbarComponent} from "./app/navbar/navbar.component";
import {ShowcaseComponent} from "./app/showcase/showcase.component";
import {ShowcaseCardComponent} from "./app/showcase/showcase-card/showcase-card.component";
import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [ NavbarComponent, ShowcaseComponent, ShowcaseCardComponent, AppComponent ],
    providers:    [
        WheelService,
        { provide: "Window",  useValue: window },
        CardsService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

