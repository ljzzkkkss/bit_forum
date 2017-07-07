import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/modules/app.module';
import './styles.css';
import './third-part/css/froala_editor.pkgd.min.css';
import './third-part/css/animate.css';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
