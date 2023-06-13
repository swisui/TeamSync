import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';

@Injectable()
export class ConfigService {
    constructor(private _themeService: ThemeService) {}

    public loadAppConfig(): void {
        const theme = sessionStorage.getItem('theme') ?? 'light';
        this._themeService.changeTheme(theme).then();
    }
}
