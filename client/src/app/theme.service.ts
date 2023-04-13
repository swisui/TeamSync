import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly _head: HTMLElement;
    private _renderer: Renderer2;

    constructor(
        private _injector: Injector,
        private _rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) document: Document,
    ) {
        this._head = document.head;
        this._renderer = this._rendererFactory.createRenderer(null, null);
    }

    public async changeTheme(theme: string): Promise<void> {
        await this._loadCss(theme);
    }

    private async _loadCss(filename: string): Promise<void> {
        return new Promise(resolve => {
            const linkEl: HTMLElement = this._renderer.createElement('link');
            this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
            this._renderer.setAttribute(linkEl, 'type', 'text/css');
            this._renderer.setAttribute(linkEl, 'href', `${filename}-theme.css`);
            this._renderer.setProperty(linkEl, 'onload', () => {
                this._removeDefaultTheme();
                resolve();
            });
            this._renderer.appendChild(this._head, linkEl);
        });
    }

    private _removeDefaultTheme(): void {
        const themeLinks = document.querySelectorAll('[href$="-theme.css"]');
        const themes = Array.from(themeLinks);
        if (themes.length > 1) {
            this._renderer.removeChild(this._head, themes.shift());
        }
    }
}
