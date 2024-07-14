import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProdutoComponent } from './app/app.component';

bootstrapApplication(ProdutoComponent, appConfig)
  .catch((err) => console.error(err));
