import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

bootstrap()
    .then(() => {
        const loaderDom = document.querySelector('[href="/assets/css/loading.css"]');
        if (loaderDom && loaderDom.remove) {
            loaderDom.remove();
        }
    })
    .catch(console.log);
