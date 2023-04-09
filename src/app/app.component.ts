import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public theme;

    constructor(private _themeService: ThemeService) {
        this.theme = sessionStorage.getItem('theme') ?? 'light';
    }

    changeTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        sessionStorage.setItem('theme', this.theme);
        this._themeService.changeTheme(this.theme).then();
    }
}
