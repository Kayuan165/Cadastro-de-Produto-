import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoConsultaComponent } from './Components/produto-consulta/produto-consulta.component';
import { ProdutoCadastroComponent } from './Components/produto-cadastro/produto-cadastro.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produto',
    pathMatch: 'full'
  },
  {
    path: 'produto',
    component: ProdutoConsultaComponent
  },
  {
    path: 'produto/cadastro',
    component: ProdutoCadastroComponent
  },
  {
    path: 'produto/cadastro/:id',
    component: ProdutoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[ProdutoConsultaComponent, ProdutoCadastroComponent]
})
export class ProdutoRoutes { }