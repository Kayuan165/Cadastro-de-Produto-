import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProdutoComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importando suas rotas

bootstrapApplication(ProdutoComponent, {
  providers: [
    provideRouter(routes) // Fornecendo as rotas
  ]
})
.catch(err => console.error(err));
