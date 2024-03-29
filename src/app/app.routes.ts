import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './Components/Components/pagina-principal/pagina-principal.component';
import { PaginaSolicitudesComponent } from './Components/Components/pagina-solicitudes/pagina-solicitudes.component';
import { PaginaCuentaComponent } from './Components/Components/pagina-cuenta/pagina-cuenta.component';
import { PaginaHomeComponent } from './Components/Components/pagina-home/pagina-home.component';
import { LoginComponent } from './layout/publico/login/login/login.component';

export const routes: Routes = [

  {path: 'login ', component: LoginComponent},
  {path: 'pagianPrincipal ', component: PaginaPrincipalComponent},
  {path: 'paginaSolicitud ', component: PaginaSolicitudesComponent},
  {path: 'paginaCuenta', component: PaginaCuentaComponent},
  {path: 'paginaCuenta', component: PaginaHomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

