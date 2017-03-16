import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/modules/app.module';
import './third-part/bootstrap/css/bootstrap.min.css';
import './third-part/bootstrap/css/bootstrap-grid.min.css';
import './third-part/bootstrap/css/bootstrap-reboot.min.css';
import './styles.css';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
