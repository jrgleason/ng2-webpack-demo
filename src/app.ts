import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { WheelService } from "./wheel/wheel.service";
import { CardsService } from "./cards/cards.service";
if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, [ HTTP_PROVIDERS, WheelService, CardsService ]);
