import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Producto2Component } from './producto2.component';
import { OtraPantallaComponent } from './otra-pantalla/otra-pantalla.component';

const routes: Routes = [
  {
    path: '',
    component: Producto2Component
  },
  {
    path: 'otra-pantalla',
    component: OtraPantallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Producto2RoutingModule { }
