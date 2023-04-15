import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    public theme: string;

    constructor(private _themeService: ThemeService) {
        this.theme = <string>sessionStorage.getItem('theme') ?? 'light';
    }

    changeTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        sessionStorage.setItem('theme', this.theme);
        this._themeService.changeTheme(this.theme).then();
    }
}
