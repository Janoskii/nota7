import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaEPage } from './asistencia-e.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaEPageRoutingModule {}
