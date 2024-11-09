import { bootstrapApplication } from '@angular/platform-browser';
import { ProdutoComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ProdutoComponent, config);

export default bootstrap;
