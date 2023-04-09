import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { ButtonModule } from 'primeng/button';

const appInitializerFn = (appConfig: ConfigService) => () => appConfig.loadAppConfig();

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ButtonModule],
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            multi: true,
            deps: [ConfigService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
